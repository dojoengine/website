export function Wave() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      viewBox="0 0 1506 1247"
      fill="none"
      id="wave"
      className="w-full absolute top-[-25vh] left-0 right-0 z-[-1]"
    >
      <path
        fill="url(#wave-gradient)"
        d="M-18.8 140.135s914.302 315.049 774.8 0c-139.502-315.049 774.8 0 774.8 0V1246.98H-18.8V140.135Z"
        opacity={0.43}
      />
      <defs>
        <linearGradient
          id="wave-gradient"
          x1={756}
          x2={756}
          y1={0.113}
          y2={1246.98}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#321CC4" stopOpacity={0.68} />
          <stop offset={0.55} stopColor="#311BBF" />
          <stop offset={1} stopColor="#021531" />
        </linearGradient>
      </defs>
    </svg>
  );
}
