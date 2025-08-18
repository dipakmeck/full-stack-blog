"use client";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {toast} from "react-hot-toast";
//import { createElement } from "react";

type Props =  {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  categoryId: string;
  location: string;
}

// function getTextFromHtml(html:string) {
//     return createElement('span',null, html);
// }

const deleteBlog = async (id:string) => {
  const res = await fetch(`http://localhost:3000/api/blogs/${id}`,{
    cache: "no-store",
    method: "DELETE",
  });
};

const BlogItem = (props: Props) => {
  const handleDelete = async () => {
    try{
      toast.loading("Deleting Blog.", {id:"delete"});
      await deleteBlog(props.id);
      toast.loading("Deleted Blog.", {id:"delete"});
    }catch(err) {
      toast.error("Delete Fail.", {id:"delete"});
      console.log(err);
    }


  }
  return (
    <Card className="hover:border-slate-950 duration-500 flex flex-col w-[400px] h-[550px] mx-4 my-2 rounded-lg">
      <CardHeader>
        <Image loading="lazy" width={400} height={100} className="h-48 rounded-sm" alt={props.title} src={props.imageUrl ?? "https://images.unsplash.com/photo-1550483795-c70ec4819718"} />
      </CardHeader>
      <CardTitle className="p-3">{props.title}</CardTitle>
      <CardContent className="w-full text-slate-900">
        <div className="tracking-wide w-full px-2 py-1 text-left" dangerouslySetInnerHTML={{__html: `${props.description.slice(0,120)}...`}}></div>
      </CardContent>
      <CardFooter className="flex justify-between w-full h-full p-3">
        <Link href={`/blogs/view/${props.id}`} className="mt-auto border-[1px] p-3 rounded-lg hover:bg-violet-600 hover:text-violet-100 duration-500">View More</Link>
        {props.isProfile && (
            <Link href={`/blogs/edit/${props.id}`} className="mt-auto border-[1px] p-3 rounded-lg hover:bg-violet-600 hover:text-violet-100 duration-500">Edit Blog</Link>

        )}
        {props.isProfile && (
            <button onClick={handleDelete} className="mt-auto border-[1px] p-3 rounded-lg hover:bg-violet-600 hover:text-violet-100 duration-500">Delete Blog</button>

        )}
      </CardFooter>
    </Card>
  )
}

export default BlogItem