"use client";
import { ChangeEvent, use } from 'react';
import { BlogItemType } from '@/lib/types';
//import { categories } from '@/lib/utils';
import dynamic from 'next/dynamic';
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });
import { useSession } from 'next-auth/react';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import {toast} from 'react-hot-toast';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

const getBlogById = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
    cache: 'no-cache',
  });
  const data = await res.json();
  return data.blog;
}

const updateBlogById = async (id: string, formData: any) => {
  const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
    cache: 'no-cache',
    method: 'PUT',
    body: formData
  });
  const data = await res.json();
  return data.blog;
}

const EditBlog = ({params}:{params: Promise<{id: string}>}) => {
  const {data:session} = useSession();
  const {id}  = use(params);
  //console.log(session);
  const editor = useRef(null);
  const [imageUrl, setImageUrl] = useState('');
  //const [imageFile, setImageFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const {register, handleSubmit, formState:{errors}} = useForm();
  // const handleImageChange = (e:ChangeEvent<HTMLInputElement>) => {
  //   //@ts-ignore
  //   const file = e.target.files[0];
  //   //setImageFile(file);
  //   setImageUrl(URL.createObjectURL(file))
  // }

  useEffect(()=> {
    setIsLoading(true);
    toast.loading("Updating Blog Details", {id: "loading"});
    getBlogById( id ?? "").then((data: BlogItemType)=> {
      const contentBlocks = data.description;
      //console.log(contentBlocks);
      const contentState = contentBlocks;
      const initialState = contentState;
      setImageUrl(data.imageUrl);
      setContent(initialState);
      if(headingRef && headingRef.current) {
        headingRef.current.innerText = data.title;
      }
      setIsLoading(false);
      toast.success("Updated Blog Details", {id: "loading"})
    })
    .catch(err=>{
      console.log(err)
      toast.error("Erro Blog Details", {id: "loading"})
    })
    .finally(()=>{
      setIsLoading(false)}

    );
  },[]);

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
      title:headingRef.current?.innerText,
      description: content,
    });

    console.log(data.image[0]);

    formData.append('postData', postData);
    formData.append('image', data.image[0]);

    //console.log(content);
    try {
      toast.loading("Updating your post to world.", {id:"postData"});

      await updateBlogById(id, formData);

      toast.success("Updated successfully.", {id:"postData"});
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
    {imageUrl && <Image loading="lazy" className="mx-auto my-20 rounded-lg shadow-xl border-[3px]" src={imageUrl} alt="NewPost" width={1000} height={400} />}
    {imageUrl && <div className="w-full flex my-5">
    <input type="file" className="md:w-[500px] sm:w-[300px] m-auto text-slate-900 bg-gray-100 p-4 rounded-xl" id="" {...register("image", {
      required: true,
      onChange(event) {
        setImageUrl(URL.createObjectURL(event.target.files[0]));
      }
    })} />
    </div>}
    {isLoading && (

        <Skeleton className="h-[50px] w-[300px] rounded-lg mx-auto" />

    )}
    <h1 ref={headingRef} contentEditable={true} suppressContentEditableWarning={true}  className="outline-none border-none font-serif mx-auto p-4 text-2xl text-center font-semibold w-full h-28 focus:border-none"></h1>
    <div className="w-full flex my-5">
    {/* <input type="file"  className="md:w-[500px] sm:w-[300px] m-auto text-slate-900 bg-gray-100 p-4 rounded-xl" id="" {...register("image", {
      required: true,
      onChange(event) {
        setImageUrl(URL.createObjectURL(event.target.files[0]));
      }
    })} /> */}
    </div>


    <JoditEditor
			ref={editor}
			value={content}
			config={config}
			tabIndex={1} // tabIndex of textarea
			onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={(newContent) => setContent(newContent)}
		/>
    {/* <div className="w-full">
      {HTMLReactParser(content)}
    </div> */}
  </section>
  )
}

export default EditBlog