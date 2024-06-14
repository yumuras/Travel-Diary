import React from 'react'
import type { Post } from "../../libs/skill.ts"

interface Props {
    item : Post
}

const Card:React.FC<Props> = (item) => {
  console.log(item)
  return (
    <div>
      <picture>
        <img 
          src={item.image[0]?.src}
          alt = ""
          className = "w-full h-auto rounded-md"
        />
      </picture>
      <div className="bg-gray-500 rounded-md opacity-50 hover:transition hover:ease-in-out hover:duration-300 hover:opacity-100 hover:bg-slate-5 hover:translate-y-2 hover:shadow-[20px_30px_80px_30px] hover:shadow-[#dfb]/50">
        <h1 className="px-2 py-5">{item.title}</h1>
      </div>
    </div>
  )
}

export default Card