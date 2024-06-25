import React from 'react'
import type { Post } from '../../libs/skill.ts'

interface Props {
    pageProps:Post
}

const Pagination:React.FC<Props> = (props) => {
    const { pageProps } = props
    const pageIndex = Array.from({ length: pageProps.lastPage }, (_, i) => i)
    console.log(pageProps)
  return (
    <nav className="flex justify-center mt-20">
        <ul className="flex gap-2">
            {pageIndex.map((_,i)=>(
                <a href={i ===0 ? `/blog/` :`/blog/${i+1}/`} className="flex justify-center items-center bg-amber-400 w-10 h-10 rounded-full">
                    <li className="">
                        {i+1}
                    </li>
                </a>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination