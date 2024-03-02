"use client";

import { Katana } from "./Katana";
import { Torii } from "./Torii";

export const Sections = () => {
  const sections = [
    {
      span: 1,
      title: "Katana",
      Component: <Katana />,
      responsiveSpan: { sm: 1, md: 2, lg: 1 },
    },
    {
      span: 2,
      title: "Torii",
      Component: <Torii />,
      responsiveSpan: { sm: 1, md: 1, lg: 1 },
    },
    {
      span: 1,
      title: "Packing",
      Component: <Torii />,
      responsiveSpan: { sm: 1, md: 1, lg: 1 },
    },
    {
      span: 2,
      title: "CLi",
      Component: <Torii />,
      responsiveSpan: { sm: 1, md: 1, lg: 1 },
    },
    {
      span: 1,
      title: "Deployment",
      Component: <Torii />,
      responsiveSpan: { sm: 1, md: 1, lg: 1 },
    },
    {
      span: 1,
      title: "Open",
      Component: <Torii />,
      responsiveSpan: { sm: 1, md: 1, lg: 2 },
    },
    {
      span: 1,
      title: "Torii",
      Component: <Torii />,
      responsiveSpan: { sm: 2, md: 1, lg: 2 },
    },
    {
      span: 2,
      title: "Torii",
      Component: <Torii />,
      responsiveSpan: { sm: 1, md: 1, lg: 1 },
    },
    {
      span: 1,
      title: "Torii",
      Component: <Torii />,
      responsiveSpan: { sm: 1, md: 1, lg: 1 },
    },
  ];
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 h-screen">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`col-span-${section.span} sm:col-span-${section.responsiveSpan.sm} md:col-span-${section.responsiveSpan.md} lg:col-span-${section.responsiveSpan.lg} overflow-none rounded  transition-all duration-500 `}
        >
          {section.Component}
        </div>
      ))}
    </div>
  );
};
