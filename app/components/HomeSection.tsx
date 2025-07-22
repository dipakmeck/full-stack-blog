import { getAllBlogs } from '@/lib/helpers'
import Image from 'next/image'

const blogs = [
  {
    id:"687e266dc46d0c2fa8b9278adfd",
    title:"NextJS is Awesome",
    description:"<p>Hello, NextJS is really Awesome. </p><p>You should learn it.</p>",imageUrl:"http://res.cloudinary.com/ddspmoji8/image/upload/v1753097834/nextjs-full-stack-blog/ksb579sm2mihahed4tkb.png",
    userId:"686f8d4ffe76db0c15bcfa94",
    createdAt:"2025-07-21T11:37:17.438Z",
    updatedAt:"2025-07-21T11:50:22.720Z",
    categoryId:"686fe4548e6426dc4251e00b",
    location:"India"
  },
  {
    id:"687e266dc46d0c2fa8b9278adfsd",
    title:"NextJS is Awesome",
    description:"<p>Hello, NextJS is really Awesome. </p><p>You should learn it.</p>",imageUrl:"http://res.cloudinary.com/ddspmoji8/image/upload/v1753097834/nextjs-full-stack-blog/ksb579sm2mihahed4tkb.png",
    userId:"686f8d4ffe76db0c15bcfa94",
    createdAt:"2025-07-21T11:37:17.438Z",
    updatedAt:"2025-07-21T11:50:22.720Z",
    categoryId:"686fe4548e6426dc4251e00b",
    location:"India"
  },
  {
    id:"687e266dc46d0c2fa8b9278adfs",
    title:"NextJS is Awesome",
    description:"<p>Hello, NextJS is really Awesome. </p><p>You should learn it.</p>",imageUrl:"http://res.cloudinary.com/ddspmoji8/image/upload/v1753097834/nextjs-full-stack-blog/ksb579sm2mihahed4tkb.png",
    userId:"686f8d4ffe76db0c15bcfa94",
    createdAt:"2025-07-21T11:37:17.438Z",
    updatedAt:"2025-07-21T11:50:22.720Z",
    categoryId:"686fe4548e6426dc4251e00b",
    location:"India"
  },
  {
    id:"687e266dc46d0c2fa8bdfsf9278a",
    title:"NextJS is Awesome",
    description:"<p>Hello, NextJS is really Awesome. </p><p>You should learn it.</p>",imageUrl:"http://res.cloudinary.com/ddspmoji8/image/upload/v1753097834/nextjs-full-stack-blog/ksb579sm2mihahed4tkb.png",
    userId:"686f8d4ffe76db0c15bcfa94",
    createdAt:"2025-07-21T11:37:17.438Z",
    updatedAt:"2025-07-21T11:50:22.720Z",
    categoryId:"686fe4548e6426dc4251e00b",
    location:"India"
  },
  {
    id:"687e266dc46d0c2fdfsfa8b9278a",
    title:"NextJS is Awesome",
    description:"<p>Hello, NextJS is really Awesome. </p><p>You should learn it.</p>",imageUrl:"http://res.cloudinary.com/ddspmoji8/image/upload/v1753097834/nextjs-full-stack-blog/ksb579sm2mihahed4tkb.png",
    userId:"686f8d4ffe76db0c15bcfa94",
    createdAt:"2025-07-21T11:37:17.438Z",
    updatedAt:"2025-07-21T11:50:22.720Z",
    categoryId:"686fe4548e6426dc4251e00b",
    location:"India"
  },
  {
    id:"687e266ddfsdc46d0c2fa8b9278a",
    title:"NextJS is Awesome",
    description:"<p>Hello, NextJS is really Awesome. </p><p>You should learn it.</p>",imageUrl:"http://res.cloudinary.com/ddspmoji8/image/upload/v1753097834/nextjs-full-stack-blog/ksb579sm2mihahed4tkb.png",
    userId:"686f8d4ffe76db0c15bcfa94",
    createdAt:"2025-07-21T11:37:17.438Z",
    updatedAt:"2025-07-21T11:50:22.720Z",
    categoryId:"686fe4548e6426dc4251e00b",
    location:"India"
  }
]

const HomeSection = async () => {
  // const blogs = await getAllBlogs(6);
  return (
    <section className='w-full my-4'>
      <div className='w-full flex min-xs:flex-col min-md:flex-row justify-center items-center'>
        <div className='p-8 w-3/4 flex flex-col gap-3'>
          <p className='tracking-wide min-lg:text-6xl min-md:text-3xl min-xs:text-2xl min-md:w-2/4 min-xs:4/4 text-start text-gray-900'>
            Learn from the best, and become the best.
          </p>
          <p className='tracking-wide my-2 min-md:text-2xl min-xs:text-md font-semibold min-md:w-3/4 min-xs:w-full text-start text-gray-900'>
            Learn it by doing it for FREE with practical step by step series and articles.
          </p>
        </div>
        <div className='min-md:w-2/4 min-xs:w-3/4 min-md:mx-2 min-xs:my-2'>
          <Image className='w-full rounded-2xl drop-shadow-2xl' alt="CarouselImage" width={300} height={200} src={"https://images.unsplash.com/photo-1749740577807-e20202e60da4"} />
        </div>
      </div>
      <hr className='p-3 my-4' />
      <div className="flex flex-col justify-center items-center">
        <div className="p-4">
          <h2 className="text-2xl font-semibold">Recent Articles</h2>
        </div>
        <div className="flex w-full flex-wrap justify-center">
          {JSON.stringify(blogs)}
        </div>
      </div>
    </section>
  )
}

export default HomeSection