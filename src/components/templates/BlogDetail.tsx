import React , { useState } from 'react'
import type { Post } from "../../libs/skill.ts"
import '@fontsource/zen-maru-gothic/500.css';


interface Props {
    blog : Post
}

const BlogDetail:React.FC<Props> = (blog) => {
  const imageLength = blog.image.length
  const [imageIndex,setImageIndex] = useState<number>(0)
  console.log(blog)
  return (
    <div>
      <article className="flex flex-col-reverse md:flex-row bg-slate-200">
        <article className="p-5 md:p-10">
          <h1 className="font-extrabold text-2xl/5 tracking-wide">{blog.title}</h1>
          <p className="mt-10 font-medium text-base tracking-wider">{blog.content}</p>
        </article>
        <article className="relative">
          <button 
            className={imageIndex >= 1 ? "bg-[#afd] opacity-70 absolute bottom-0 left-5 z-10 w-20 h-20 rounded-full" : "hidden"} 
            onClick={() => setImageIndex((prev) => prev - 1 )}
          >
            back
          </button>
            <img src={blog.image[imageIndex].src} className="z-1 w-full md:w-[1200px] h-auto"/>
          <button 
            className={imageIndex + 1 < imageLength ? "bg-[#afd] opacity-70 absolute bottom-0 right-5 z-10 w-20 h-20 rounded-full" : "hidden"} 
            onClick={() => setImageIndex((prev) => prev + 1 )}
          >
            next
          </button>
        </article>
      </article>
      
      
    </div>
  )
}

export default BlogDetail