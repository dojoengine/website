import { forwardRef } from "react";
import { Text } from "./Text";

type ButtonProps = {
  variant?: "showArrow";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const { variant, size, children, onClick } = props;

    const paddingClasses =
      size === "small"
        ? "px-2 py-1"
        : size === "medium"
          ? "px-6 py-3"
          : size === "large"
            ? "px-8 py-4"
            : "px-8 py-3";

    return (
      <button
        ref={ref}
        onClick={onClick}
        className={`${paddingClasses} ${variant ? "pl-6 pr-4" : ""} group relative z-0 overflow-hidden rounded-full font-mono capitalize text-white transition-all duration-[400ms] hover:text-text-black`}
      >
        <div className="absolute inset-0 z-[-2] bg-button-purple" />
        <div className="absolute bottom-0 left-0 top-0 z-[-1] w-0 bg-badge-yellow transition-all duration-[400ms] group-hover:w-full" />
        {variant === "showArrow" ? (
          <Text textStyle="buttonText" className="flex items-center gap-16">
            {children}
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
          <Text textStyle="buttonText">{children}</Text>
        )}
      </button>
    );
  },
);
