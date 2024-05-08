import { forwardRef } from "react";
import { Text } from "./Text";

export const Button = forwardRef<
  HTMLButtonElement,
  { variant?: "showArrow"; children: React.ReactNode; onClick?: () => void }
>(function Button(props, ref) {
  return (
    <button
      ref={ref}
      className={`${
        props.variant ? "pl-6 pr-4" : "px-8"
      } text-white group relative z-0 overflow-hidden rounded-full py-3 font-mono transition-all duration-[400ms] hover:text-text-black `}
    >
      <div className="absolute inset-0 z-[-2] bg-button-purple" />
      <div className="absolute bottom-0 left-0 top-0 z-[-1] w-0 bg-badge-yellow transition-all duration-[400ms] group-hover:w-full" />
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
                className="fill-text-white transition-all duration-[400ms] group-hover:fill-text-black"
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
