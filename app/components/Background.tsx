import Image from "next/image";

export const Background = () => {
  return (
    <div style={{zIndex:"-1"}} className="absolute top-0 left-0 right-0 h-full pointer-events-none">
      <svg width="100%" height="100%">
        <defs>
          <pattern id="dotted-bg" patternUnits="userSpaceOnUse" width="36" height="36">
            <svg width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.35">
                <circle cx="1" cy="1" r="1" fill="#3C5D8A"></circle>
              </g>
            </svg>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotted-bg)"></rect>
      </svg>
    </div>
  );
};
