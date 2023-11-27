"use client"

import { ChevronDown } from "../icons/ChevronDown"

const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
}
export const ScrollButton = () => {
    return <button onClick={() => scrollTo('code')} className="rounded-full border p-2 border-dojo-blue-300 hover:bg-dojo-red-400 hover:border-dojo-blue-500 bg-dojo-blue-800 z-10"><ChevronDown /></button>
}