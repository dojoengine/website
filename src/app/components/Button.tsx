// import { forwardRef } from "react";
// import { Text } from "./Text";

// type ButtonProps = {
//   variant?: "showArrow";
//   size?: "small" | "medium" | "large";
//   children: React.ReactNode;
//   onClick?: () => void;
// };

// export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
//   function Button(props, ref) {
//     const { variant, size, children, onClick } = props;

//     const paddingClasses =
//       size === "small"
//         ? "px-2 py-1"
//         : size === "medium"
//           ? "px-6 py-3"
//           : size === "large"
//             ? "px-8 py-4"
//             : "px-8 py-3";

//     return (
//       <button
//         ref={ref}
//         onClick={onClick}
//         className={`${paddingClasses} ${variant ? "pl-6 pr-4" : ""} group relative z-0 overflow-hidden rounded-full font-mono capitalize text-white transition-all duration-[400ms] hover:text-text-black`}
//       >
//         <div className="absolute inset-0 z-[-2] bg-button-purple" />
//         <div className="absolute bottom-0 left-0 top-0 z-[-1] w-0 bg-badge-yellow transition-all duration-[400ms] group-hover:w-full" />
//         {variant === "showArrow" ? (
//           <Text textStyle="buttonText" className="flex items-center gap-16">
//             {children}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width={12}
//               height={13}
//               fill="none"
//             >
//               <g clipPath="url(#a)">
//                 <path
//                   fill="#fff"
//                   fillRule="evenodd"
//                   d="M7.514 6.573 3.038 11.05l1.124 1.124 5.6-5.6-5.6-5.6-1.124 1.124 4.476 4.476Z"
//                   clipRule="evenodd"
//                   className="fill-text-white transition-all duration-[400ms] group-hover:fill-text-black"
//                 />
//               </g>
//               <defs>
//                 <clipPath id="a">
//                   <path fill="#fff" d="M12 12.173H.8V.973H12z" />
//                 </clipPath>
//               </defs>
//             </svg>
//           </Text>
//         ) : (
//           <Text textStyle="buttonText">{children}</Text>
//         )}
//       </button>
//     );
//   },
// );

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/app/components/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 items-center justify-center group",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-badge-red/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-white/40  bg-background hover:bg-accent hover:text-accent-foreground hover:border-badge-red/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-full px-3",
        lg: "h-11 rounded-full px-8",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  withArrow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, withArrow = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {props.children}

        {withArrow && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={13}
            fill="none"
            className="ml-4 transition-transform duration-200 group-hover:translate-x-2"
          >
            <g clipPath="url(#a)">
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M7.514 6.573 3.038 11.05l1.124 1.124 5.6-5.6-5.6-5.6-1.124 1.124 4.476 4.476Z"
                clipRule="evenodd"
                className="fill-text-white transition-all duration-[400ms] "
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M12 12.173H.8V.973H12z" />
              </clipPath>
            </defs>
          </svg>
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
