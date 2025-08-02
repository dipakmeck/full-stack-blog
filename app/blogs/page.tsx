import { categories } from "@/lib/utils"
import { FaSearch } from "react-icons/fa"
import BlogItem from "../components/BlogItem"
import { getAllBlogs } from "@/lib/helpers"
import { BlogItemType, CategoryType } from "@/lib/types";

const BlogsPage = async () => {
  const blogs = await getAllBlogs();
  return (
    <section className="w-full h-full">
      <div className="flex flex-col gap-3 my-10 p-8">
        <h4 className="text-3xl font-semibold">Explore Articles On Various Categories</h4>
        <p className="text-xl font-semibold">Practical Articles For Learning Anything</p>
      </div>
      <nav className="bg-gray-100 border w-full flex my-4 sticky top-0 bg-center gap-4 h-20 md:p-8 xs:p-2 justify-between items-center">
        <div className="mr-auto flex md:w-1/4 xs:w-2/4 items-center gap-6">
          <p className="font-semibold text-2xl">Filter</p>
          <select name="category" id="select" className="bg-white md:px-5 w-xs:px-2 w-3/4 mx-2 py-3 rounded-lg">
          {categories.map((item: CategoryType)=><option className="rounded-md bg-gray-100" key={item.id} value={item.id}>{item.name}</option>)}
          </select>
        </div>
        <div className="w-2/4 flex ml-auto md:gap-6 xs:gap-2 item-center">
          <p className="font-semibold text-2xl">Search</p>
          <input type="text" className="w-3/4 px-4 py-2 rounded-lg bg-white" />
          <FaSearch className="cursor-pointer" />
        </div>

      </nav>
      <div className="flex gap-4 flex-wrap justify-center my-1">
          {blogs.slice(0,6).map((blog:BlogItemType)=> (<BlogItem {...blog} key={blog.id} />))}
        </div>
    </section>
  )
}

export default BlogsPage