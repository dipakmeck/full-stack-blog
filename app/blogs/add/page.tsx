"use client";

import { categories } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Image from "next/image";
import dynamic from 'next/dynamic';
//import JoditEditor from 'jodit-react';
import { useForm } from "react-hook-form";
import { ChangeEvent, useMemo, useRef, useState } from "react";
// import HTMLReactParser from "html-react-parser/lib/index";
import {  toast } from "react-hot-toast";
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

function BlogAdd () {
  const {data:session} = useSession();
  //console.log(session);
  const editor = useRef(null);
  const [imageUrl, setImageUrl] = useState('');
  //const [imageFile, setImageFile] = useState<File | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const {register, handleSubmit, formState:{errors}} = useForm();
  // const handleImageChange = (e:ChangeEvent<HTMLInputElement>) => {
  //   //@ts-ignore
  //   const file = e.target.files[0];
  //   setImageFile(file);
  //   setImageUrl(URL.createObjectURL(file))
  // }

  const [content, setContent] = useState('');


  let placeholder;

  const config = useMemo(() => ({
    readonly: false, // all options from https://xdsoft.net/jodit/docs/,
    placeholder: placeholder || 'Start typings...'
  }),
  [placeholder]
  );

  const handlePost = async (data: any) => {
    const formData = new FormData();
    const postData = JSON.stringify({
      title: headingRef.current?.innerText,
      description: content,
      location: data.location,
      userId: session?.user.id,
      categoryId: data.category,
    });
    console.log(postData);
    // console.log(data.image[0]);

    formData.append('postData', postData);
    formData.append('image', data.image[0]);
    // console.log(formData.get('postData'));
    // console.log(formData.get('image'));
    // console.log("Data", data)
    // console.log("Editor HTML", HTMLReactParser(content))
    console.log(formData);
    try {
      toast.loading("Sending your post to world.", {id:"postData"});

      await fetch("http://localhost:3000/api/blogs", {
        method:"POST",
        body: formData,
        cache: "no-store"
      });

      toast.success("Sent your post to world.", {id:"postData"});
    } catch(err) {
      toast.error("Sending failed.", {id:"postData"});
      return console.log(err);
    }
  }
  return (
  <section className="w-full">
    <div className="flex justify-between p-4 item-center">
      <div className="w-1/4">
        <span className="font-extrabold mx-3">Author</span>
        <span className="uppercase font-semibold">{session?.user?.name}</span>
      </div>
      <button onClick={handleSubmit(handlePost)} className="bg-violet-600 text-white px-6 focus:ring-violet-950 py-3 rounded-xl font-semibold shadow-xl hover:bg-violet-700">Publish</button>
    </div>
    {imageUrl && <Image className="mx-auto my-20 rounded-lg shadow-xl border-[3px]" src={imageUrl} alt="NewPost" width={1000} height={400} />}
    <h1 ref={headingRef} contentEditable={true} suppressContentEditableWarning={true}  className="outline-none border-none font-serif mx-auto p-4 text-2xl text-center font-semibold w-full h-28 focus:border-none">Enter Title</h1>
    <div className="w-full flex my-5">
    <input type="file"  className="md:w-[500px] sm:w-[300px] m-auto text-slate-900 bg-gray-100 p-4 rounded-xl" id="" {...register("image", {
      required: true,
      onChange(event) {
        setImageUrl(URL.createObjectURL(event.target.files[0]));
      }
    })} />
    </div>

    <div className="w-full flex my-5">
    <input {...register("location", {required: true})} placeholder="Location Ex: Delhi, India" type="text"  className="md:w-[500px] sm:w-[300px] m-auto text-slate-900 bg-gray-100 p-4 rounded-xl" id="" />
    </div>
    <div className="w-full flex my-5">
    <select  className="md:w-[500px] sm:w-[300px] m-auto text-slate-900 bg-gray-100 p-4 rounded-xl" id=""  {...register("category", {required: true})}>
      {categories.map((item)=><option key={item.id} value={item.id}>{item.name}</option>)}
    </select>
    </div>
    <JoditEditor
			ref={editor}
			value={content}
			config={config}
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => setContent(newContent)}
		/>
    {/* <div className="w-full">
      {HTMLReactParser(content)}
    </div> */}
  </section>
  )
}

export default BlogAdd;
