import { connectToDb, generateErrorMessage, generateSuccessMessage } from "@/lib/helpers"
import prisma from "@/prisma";

export const GET = async (req: Request, {params}:{params: {id: string}}) => {
  try {
    const id = params.id;
    await connectToDb();
    const user = await prisma.user.findFirst({where: {id}, include:{_count:true, blogs: true}});
    return generateSuccessMessage({...user}, 200);
  } catch (err) {
    return generateErrorMessage({err}, 500);
  } finally {
    await prisma.$disconnect();
  }

}