import React from 'react'
import type { Post } from "../../libs/skill.ts"

interface Props {
    blog : Post
}

const BlogDetail:React.FC<Props> = (blog) => {
  return (
    <div>
        <h1>{blog.title}</h1>
    </div>
  )
}

export default BlogDetail