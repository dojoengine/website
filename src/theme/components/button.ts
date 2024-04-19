export const Button = {
  baseStyle: {
    py: 3,
    px: 8,
    borderRadius: "full",
    textStyle: "buttonText",
    transition: "all 0.4s",
    zIndex: 1,
    overflow: "hidden",
    _before: {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      borderRadius: "full",
      bg: "button.purple",
      zIndex: -2,
    },
    _after: {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      width: "0%",
      borderRadius: "full",
      bg: "badge.yellow",
      transition: "all 0.4s",
      zIndex: -1,
    },
    _hover: {
      color: "text.black",

      _after: {
        width: "100%",
      },

      path: {
        fill: "text.black",
        transition: "all 0.4s",
      },
    },
  },
  variants: {
    showArrow: {
      pl: 6,
      pr: 4,
    },
    cta: {
      color: "text.black",
      py: 5,
      px: 10,
    },
  },
  sizes: {
    sm: {
      py: 2,
      px: 4,
    },
  },
};
