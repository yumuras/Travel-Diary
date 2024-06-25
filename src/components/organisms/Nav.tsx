import React from 'react'
import { clsx } from 'clsx'
import '@fontsource/dm-mono/400.css';

interface Props {
    active:boolean
}


const Nav:React.FC<Props> = (props) => {
    const { active } = props
    console.log(active)
  return (
    <div className={clsx(
        'overflow-auto fixed flex px-20 items-center md:hidden',
        active
            ? 'bottom-0 left-0 right-0 top-0 z-40  h-full bg-[#bdf]/60'
            : 'right-[-100%] lg:right-4'
    )}>
        <ul className="flex flex-col gap-28 font-extrabold text-3xl text-white font-sans">
            <li className="bg-[#aaf] w-40 h-40 rounded-full flex justify-center items-center">
                <a href="/">Top</a>
            </li>
            <li className="bg-[#afa] w-40 h-40 rounded-full flex justify-center items-center">
                <a href="/blog">Diary</a>
            </li>
            <li className="bg-[#fba] w-40 h-40 rounded-full flex justify-center items-center">
                <a href="/faq">Faq</a>
            </li>
        </ul>
    </div>
  )
}

export default Nav