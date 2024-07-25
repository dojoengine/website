import React, { ReactHTML } from "react";

const textStyles = {
  headline1:
    "font-title text-[50px] md:text-[80px] leading-[60px] md:leading-[80px]",
  headline2:
    "font-title text-[32px] md:text-[58px] leading-[40px] md:leading-[80px]",
  headline3: "font-title text-[24px] md:text-[32px]",
  bodyText: "text-[16px] md:text-[21px] leading-[24px] md:leading-[34px]",
  buttonText:
    "font-body  text-[16px] md:text-[17px] leading-[24px] md:leading-[24px]",
  badgeText:
    "font-mono  text-[12px] md:text-[14px] leading-[16px] md:leading-[22px]",
  title1:
    "font-title  text-[20px] md:text-[34px] leading-[30px] md:leading-[65px]",
  title3:
    "font-title  text-[20px] md:text-[28px] leading-[30px] md:leading-[26px]",
  overline:
    "font-title  text-[12px] md:text-[15px] leading-[16px] md:leading-[36px]",
};

export function Text({
  children,
  textStyle,
  as = "p",
  className,
  ...props
}: {
  children: React.ReactNode;
  textStyle: keyof typeof textStyles;
  as?: keyof ReactHTML;
  className?: string;
}) {
  return React.createElement(
    as,
    {
      className: `${textStyles[textStyle]} ${className}`,
      ...props,
    },
    children,
  );
}
