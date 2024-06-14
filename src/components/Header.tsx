import React from 'react'
import clsx from 'clsx'
import type { FC } from 'react'
import { useState } from 'react'
import Nav from "./organisms/Nav"

const Header = () => {
    const [active, setActive] = useState<boolean>(false)
    const handleClick = () => {
        setActive(!active)
    }
return (
    <section>
        <header className="flex h-20 w-full px-10 justify-between rounded-md border-2 border-white bg-[#66A5AD] p-5 text-white shadow-xl">
            <h2 className="my-auto">旅行日記</h2>
            <div className="gap-6 my-auto hidden md:block">
                <a href="/">トップ</a>
                <a href="/blog">日記</a>
                <a href="/faq">お問い合わせ</a>
            </div>
            <div className="flex items-center md:hidden">
            <button 
                className="py-auto z-50 space-y-2 border-none"
                onClick={handleClick}
            >
                <span className={active
                    ? 'block h-0.5 w-10 translate-y-2.5 rotate-45 bg-white duration-300'
                    : 'block h-0.5 w-8 bg-white duration-300'}
                />
                <span className={active
                    ? 'block opacity-0 duration-300'
                    : 'block h-0.5 w-8 bg-white duration-300'}
                />
                <span className={active
                    ? 'block h-0.5 w-10 -rotate-45 bg-white duration-300'
                    : 'block h-0.5 w-8 bg-white duration-300'}
                />
            </button>
            </div>
        </header>
        <Nav active={active}/>
    </section>
)
}

export default Header