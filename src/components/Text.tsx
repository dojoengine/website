import React, { ReactHTML } from "react";

const textStyles = {
  headline1:
    "font-['Agrandir_Variable'] font-[469] text-[50px] md:text-[80px] leading-[60px] md:leading-[80px]",
  headline2:
    "font-['Agrandir_Variable'] font-[469] text-[42px] md:text-[58px] leading-[80px] md:leading-[80px]",
  headline3:
    "font-['Agrandir_Variable'] font-[617] text-[52px] md:text-[84px] leading-[80px] md:leading-[66px]",
  bodyText:
    "font-['Agrandir_Variable'] font-[336] text-[16px] md:text-[21px] leading-[24px] md:leading-[34px]",
  buttonText:
    "font-['Circular_LL'] font-[450] text-[16px] md:text-[17px] leading-[24px] md:leading-[24px]",
  badgeText:
    "font-['IBM_Plex_Sans'] font-[600] text-[12px] md:text-[14px] leading-[16px] md:leading-[22px]",
  title1:
    "font-['Agrandir_Variable'] font-[617] text-[20px] md:text-[34px] leading-[30px] md:leading-[65px]",
  title3:
    "font-['Agrandir_Variable'] font-[469] text-[20px] md:text-[28px] leading-[30px] md:leading-[26px]",
  overline:
    "font-['Agrandir_Variable'] font-[617] text-[12px] md:text-[15px] leading-[16px] md:leading-[36px]",
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
