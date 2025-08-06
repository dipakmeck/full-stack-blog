"use client";
import { categories } from '@/lib/utils';
import JoditEditor from 'jodit-react';
import { useSession } from 'next-auth/react';
import React, { useMemo, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const EditBlog = ({params} : {params: {id: string}}) => {
  const {data:session} = useSession();
  //console.log(session);
  const editor = useRef(null);
  //const [imageUrl, setImageUrl] = useState('');
  //const [imageFile, setImageFile] = useState<File | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  //const {register, handleSubmit, formState:{errors}} = useForm();
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

    try {
      toast.loading("Sending your post to world.", {id:"postData"});

      await fetch("http://localhost:3000/api/blogs", {
        method:"POST",
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
    <Toaster position="top-right" />
    <div className="flex justify-between p-4 item-center">
      <div className="w-1/4">
        <span className="font-extrabold mx-3">Author</span>
        <span className="uppercase font-semibold">{session?.user?.name}</span>
      </div>
      <button onClick={handlePost} className="bg-violet-600 text-white px-6 focus:ring-violet-950 py-3 rounded-xl font-semibold shadow-xl hover:bg-violet-700">Publish</button>
    </div>
    {/* {imageUrl && <Image className="mx-auto my-20 rounded-lg shadow-xl border-[3px]" src={imageUrl} alt="NewPost" width={1000} height={400} />} */}
    <h1 ref={headingRef} contentEditable={true} suppressContentEditableWarning={true}  className="outline-none border-none font-serif mx-auto p-4 text-2xl text-center font-semibold w-full h-28 focus:border-none">Enter Title</h1>
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
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => setContent(newContent)}
		/>
    {/* <div className="w-full">
      {HTMLReactParser(content)}
    </div> */}
  </section>
  )
}

export default EditBlog