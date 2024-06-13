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
          className = "w-60 h-48 md:w-[400px] md:h-[300px] rounded-md"
        />
      </picture>
      <div className="bg-gray-500">
        <h1 className="px-2 py-5">{item.title}</h1>
      </div>
    </div>
  )
}

export default Card