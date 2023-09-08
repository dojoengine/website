"use client"

import { ChevronDown } from "../icons/ChevronDown"

const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
}
export const ScrollButton = () => {
    return <button onClick={() => scrollTo('code')} className="rounded-full border p-2 border-dojo-blue-300 hover:bg-dojo-red hover:border-dojo-blue-500 bg-dojo-blue z-10"><ChevronDown /></button>
}