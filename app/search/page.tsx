"use client";
import { FaSearch } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { BlogItemType } from "@/lib/types";
import toast from "react-hot-toast";
import BlogItem from "../components/BlogItem";

const Search = () => {
  const [blogs, setBlogs] = useState<BlogItemType[]>([]);
  const {handleSubmit, register } = useForm();
  const handleSearch = async (searchString:any) => {
    //console.log(data.search);
    let str = searchString.search;
    if(searchString.search.includes(" ")) {
      str = searchString.search.split(" ").join("%20");
    }

    toast.loading("searching", {id: "SEARCH"});
    try {
      const res = await fetch(`http://localhost:3000/api/blogs/search?title=${str}`,
        {cache: "no-store"}
      );
      const data = await res.json();
      setBlogs(data.blogs);
      console.log(blogs);
      toast.success("Fetched Successfully.", {id:"SEARCH"})
    } catch (err) {
      toast.error("Fetch Failed.", {id:"SEARCH"})
    }

  }
  return (
    <section className="w-full h-full">
      <h1 className="text-3xl text-center font-bold font-serif">Search From The Amazing Blogs</h1>
      <div className="md:w-2/4 w-xs:w-3/4 mx-auto flex item-center justify-between bg-gray-100 my-4 px-6 py-4 rounded-xl text-gray-900 font-semibold">
        <input type="text" className="bg-transparent border-none outline-none p-1 w-full" {...register("search", {required: true})} />
        <FaSearch onClick={handleSubmit(handleSearch)} size={40} className="hover:bg-slate-300 p-2 rounded-full cursor-pointer" />
      </div>
      <div className="flex flex-wrap">
        {blogs.slice(0,6).map((blog:BlogItemType)=> (<BlogItem {...blog} key={blog.id} />))}
      </div>
    </section>
  )
}

export default Search