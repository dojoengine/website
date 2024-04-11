import { ButtonProps, Button as ChakraButton, Flex } from "@chakra-ui/react";

export function Button(props: ButtonProps) {
  return (
    <ChakraButton {...props}>
      {props.variant === "showArrow" ? (
        <Flex alignItems="center" gap={16}>
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
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M12 12.173H.8V.973H12z" />
              </clipPath>
            </defs>
          </svg>
        </Flex>
      ) : (
        props.children
      )}
    </ChakraButton>
  );
}
