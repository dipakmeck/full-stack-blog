//import { blogs } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import BlogItem from '../components/BlogItem'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { getUserById } from '@/lib/helpers'
import Link from 'next/link'
import { UserItemType } from '@/lib/types'

const ProfilePage = async () => {
  const sessionData = await getServerSession(authOptions);
  const userData: UserItemType = await getUserById(sessionData?.user.id ?? "");
  return (
    <section className="w-full h-full flex flex-col">
      <div className="mx-auto">
        <Image className="w-20" src={sessionData?.user.image ?? "/usericon.png"} alt="User Profile" width={200} height={200} />
      </div>
      <div className="w-auto mx-auto my-2">
        <h1 className="text-4xl font-semibold bg-slate-100 px-4 py-2">{sessionData?.user.name}</h1>
      </div>
      <div className="w-auto mx-auto my-2 flex items-center gap-3">
        <span><FaEnvelope /></span>
        <Link href={`mailto: ${sessionData?.user.email}`} className="text-xl font-semibold bg-slate-100 p-3">
        {sessionData?.user.email}
        </Link>
      </div>
      <hr className="p-2" />
      <div className="w-full h-full flex flex-col">
        <div className="mx-auto">
          <p className="text-center bg-slate-100 p-3 rounded-md font-semibold"> Blogs count { userData._count.blogs }</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center p-4 my-3">
        {userData.blogs.map((blog)=>  <BlogItem {...blog} key={blog.id} isProfile={true}  /> )}
      </div>
      {/* {JSON.stringify(userData)} */}
    </section>
  )
}

export default ProfilePage