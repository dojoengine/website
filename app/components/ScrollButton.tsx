"use client";

import { ChevronDown } from "../icons/ChevronDown";
import { useIsMobile } from "../hooks/useIsMobile";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

export const ScrollButton = () => {
  const {isMobile} = useIsMobile();

  if (isMobile) return null;
  return (
    <div className="p-8 bg-dojo-blue-800">
      <button
        onClick={() => scrollTo("code")}
        className="rounded-full border p-2 border-dojo-blue-300 hover:bg-dojo-blue-300 hover:border-dojo-blue-300 hover:text-dojo-blue-800 bg-dojo-blue-800 z-10"
      >
        <ChevronDown />
      </button>
    </div>
  );
};
