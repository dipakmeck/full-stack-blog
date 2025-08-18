import { connectToDb, generateErrorMessage, generateSuccessMessage } from "@/lib/helpers"
import prisma from "@/prisma";
import { UploadApiResponse, v2 } from "cloudinary";
//import { resolve } from "path";

async function uploadImage(file:Blob) {
  return new Promise<UploadApiResponse>(async (resolve, reject) => {
    const buffer = Buffer.from(await file.arrayBuffer());
    v2.uploader.upload_stream(
      {
        resource_type: "auto",
        folder:"nextjs-full-stack-blog"
      },
      (err, result)=>{
        if(err) {
          console.log(err);
          return reject(err);
        } else if (result) {
          return resolve(result);
        }
    }).end(buffer);
  });
}

export const GET = async (req: Request, {params}:{params: {id: string}}) => {
  try {
    const {id} = params;
    await connectToDb();
    const blog = await prisma.blog.findFirst({where: {id}});
    return generateSuccessMessage({blog}, 200);
  } catch (err) {
    return generateErrorMessage({err}, 500);
  } finally {
    await prisma.$disconnect();
  }

}

export const PUT = async (req: Request, {params}:{params: {id: string}}) => {
  v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  try {
    const formData = await req.formData();
    const {title, description} = JSON.parse(formData.get("postData") as string);
    if(!title || !description) return generateErrorMessage({reason: "Invalid Data"}, 422 );
    const file = formData.get("image") as Blob | null;
    let uploadedFile: UploadApiResponse | null = null;
    if(file) {
      uploadedFile = await uploadImage(file);
    } else {
      uploadedFile = null;
    }
    const id = params.id;
    await connectToDb();
    const blog = await prisma.blog.update({where: {id}, data: {
      title,
      description,
      imageUrl: uploadedFile?.url ?? null,
    }});
    return generateSuccessMessage({blog}, 200);
  } catch (err) {
    return generateErrorMessage({err}, 500);
  } finally {
    await prisma.$disconnect();
  }

}

export const DELETE = async (req: Request, {params}:{params: {id: string}}) => {
  try {

    const id = await params.id;
    await connectToDb();
    const blog = await prisma.blog.delete({where: {id},
    });
    return generateSuccessMessage({blog}, 200);
  } catch (err) {
    return generateErrorMessage({err}, 500);
  } finally {
    await prisma.$disconnect();
  }

}