import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Document from "next/document";
import Image from "next/image";
import { createElement } from "react";

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

function getTextFromHtml(html:string) {
    return createElement('span',null, html);
}

const BlogItem = (props: Props) => {
  return (
    <Card className="hover:border-slate-950 duration-500 flex flex-col w-[400px] h-[550px] mx-4 my-2 rounded-lg">
      <CardHeader>
        <Image width={400} height={100} className="h-48 rounded-sm" alt={props.title} src={props.imageUrl ?? "https://images.unsplash.com/photo-1550483795-c70ec4819718"} />
      </CardHeader>
      <CardTitle className="p-3">{props.title}</CardTitle>
      <CardContent className="w-full text-slate-900">
        <div className="tracking-wide w-full px-2 py-1 text-left">{getTextFromHtml(props.description)}</div>
      </CardContent>
      <CardFooter className="w-full h-full p-3">
        <button className="ml-auto mt-auto border-[1px] p-3 rounded-lg hover:bg-violet-600 hover:text-violet-100 duration-500">View More</button>
      </CardFooter>
    </Card>
  )
}

export default BlogItem