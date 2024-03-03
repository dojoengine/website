"use client";

import { DojoSmall } from "@/app/icons/DojoSmall";
import { BaseSection } from "./BaseSection";
import { Katana } from "./Katana";
import { Torii } from "./Torii";

export const Sections = () => {
  const sections = [
    {
      span: 2,
      title: "Katana",
      Component: (
        <BaseSection
          title="Terraform Worlds"
          subTitle="composable, scalable, and secure"
          color="bg-dojo-blue-400"
          textColor="text-dojo-blue-600"
        />
      ),
      responsiveSpan: { sm: 1, md: 1, lg: 2 },
    },
    {
      span: 2,
      title: "Unity, Typescript, Js & More",
      Component: (
        <BaseSection
          title="Unity, Typescript, Js & More"
          subTitle="native SDKs"
          color="bg-dojo-blue-400"
          textColor="text-dojo-blue-600"
        />
      ),
      responsiveSpan: { sm: 1, md: 1, lg: 1 },
    },
    {
      span: 1,
      title: "Packing",
      Component: (
        <BaseSection
          title="GraphQL + gRPC Interface out of the box"
          subTitle="generated"
          color="bg-dojo-blue-400"
          textColor="text-dojo-blue-600"
        />
      ),
      responsiveSpan: { sm: 1, md: 1, lg: 1 },
    },
    {
      span: 2,
      title: "CLi",
      Component: (
        <BaseSection
          title="STARK Client Side Proving"
          subTitle="coming soon"
          color="bg-dojo-blue-400"
          textColor="text-dojo-blue-600"
        />
      ),
      responsiveSpan: { sm: 1, md: 1, lg: 1 },
    },
    {
      span: 2,
      title: "Deployment",
      Component: (
        <div className="flex justify-center h-full">
          <div className="self-center">
            <DojoSmall />
          </div>
        </div>
      ),
      responsiveSpan: { sm: 1, md: 1, lg: 2 },
    },
    {
      span: 1,
      title: "Deployment",
      Component: (
        <BaseSection
          title="Automatic Indexing"
          subTitle="dynamic"
          color="bg-dojo-blue-600"
          textColor="text-dojo-blue-900"
        />
      ),
      responsiveSpan: { sm: 1, md: 1, lg: 1 },
    },
    {
      span: 1,
      title: "Open",
      Component: (
        <BaseSection
          title="bitpacking"
          subTitle="max compression onchain"
          color="bg-dojo-blue-400"
          textColor="text-dojo-blue-600"
        />
      ),
      responsiveSpan: { sm: 1, md: 1, lg: 1 },
    },
    {
      span: 1,
      title: "Torii",
      Component: (
        <BaseSection
          title="Katana Starknet Sequencer"
          subTitle="Development Tools"
          color="bg-dojo-blue-400"
          textColor="text-dojo-blue-600"
        />
      ),
      responsiveSpan: { sm: 2, md: 1, lg: 1 },
    },
    {
      span: 2,
      title: "Torii",
      Component: (
        <BaseSection
          title="Hot Reloading"
          subTitle="Development Tools"
          color="bg-dojo-blue-400"
          textColor="text-dojo-blue-600"
        />
      ),
      responsiveSpan: { sm: 1, md: 1, lg: 1 },
    },
    {
      span: 1,
      title: "Torii",
      Component: (
        <BaseSection
          title="Provable Games"
          subTitle="Starks"
          color="bg-dojo-blue-400"
          textColor="text-dojo-blue-600"
        />
      ),
      responsiveSpan: { sm: 1, md: 1, lg: 1 },
    },
  ];
  return (
    <div
      id="dojo"
      className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 h-screen p-4"
    >
      {sections.map((section, index) => (
        <div
          key={index}
          className={`col-span-${section.span} sm:col-span-${section.responsiveSpan.sm} md:col-span-${section.responsiveSpan.md} lg:col-span-${section.responsiveSpan.lg} rounded  transition-all duration-500 m-3 hover:m-1`}
        >
          {section.Component}
        </div>
      ))}
    </div>
  );
};
