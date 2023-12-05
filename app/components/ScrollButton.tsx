"use client";

import { ChevronDown } from "../icons/ChevronDown";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

export const ScrollButton = () => {
  return (
    <div className="p-8 bg-dojo-blue-800 hidden md:block">
      <button
        onClick={() => scrollTo("code")}
        className="rounded-full border p-2 border-dojo-blue-300 hover:bg-dojo-blue-300 hover:border-dojo-blue-300 hover:text-dojo-blue-800 bg-dojo-blue-800 z-10"
      >
        <ChevronDown />
      </button>
    </div>
  );
};
