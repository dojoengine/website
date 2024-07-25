"use client";

import { ForwardedRef, forwardRef } from "react";

export const Container = forwardRef(function Container(
  {
    children,
  }: {
    children: React.ReactNode[] | React.ReactNode;
  },
  ref: ForwardedRef<HTMLDivElement | null>,
) {
  return (
    <div className="relative flex justify-center" ref={ref}>
      <div className="my-16 w-full max-w-[1400px]   px-6 sm:my-32 sm:px-0">
        {children}
      </div>
    </div>
  );
});
