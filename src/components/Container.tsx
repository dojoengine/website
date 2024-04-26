"use client";

import { ForwardedRef, forwardRef } from "react";

export const Container = forwardRef(function Container(
  {
    children,
  }: {
    children: React.ReactNode[] | React.ReactNode;
  },
  ref: ForwardedRef<HTMLDivElement | null>
) {
  return (
    <div className="flex justify-center relative" ref={ref}>
      <div className="max-w-[1400px] w-full">{children}</div>
    </div>
  );
});
