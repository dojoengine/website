import { forwardRef } from "react";
import { Text } from "./Text";

export const Button = forwardRef<
  HTMLButtonElement,
  { variant?: "showArrow"; children: React.ReactNode }
>(function Button(props, ref) {
  return (
    <button
      ref={ref}
      className={`${
        props.variant ? "pl-6 pr-4" : "px-8"
      } py-3 rounded-full relative overflow-hidden group text-text-white hover:text-text-black transition-all duration-[400ms]`}
    >
      <div className="absolute inset-0 bg-button-purple z-[-2]" />
      <div className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-full bg-badge-yellow z-[-1] transition-all duration-[400ms]" />
      {props.variant === "showArrow" ? (
        <Text textStyle="buttonText" className="flex items-center gap-16">
          {props.children}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={13}
            fill="none"
          >
            <g clipPath="url(#a)">
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M7.514 6.573 3.038 11.05l1.124 1.124 5.6-5.6-5.6-5.6-1.124 1.124 4.476 4.476Z"
                clipRule="evenodd"
                className="transition-all duration-[400ms] fill-text-white group-hover:fill-text-black"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M12 12.173H.8V.973H12z" />
              </clipPath>
            </defs>
          </svg>
        </Text>
      ) : (
        <Text textStyle="buttonText">{props.children}</Text>
      )}
    </button>
  );
});
