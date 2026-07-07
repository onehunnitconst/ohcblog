import type { SVGProps } from 'react';

// The "in" is punched out of the box via a mask, so the box color follows
// `currentColor`. Control it with text color utilities, e.g.
// <LinkedInIcon className="h-4 w-4 text-[#006699]" /> or className="text-blue-600".
const MASK_ID = 'linkedin-in-cut';

export function LinkedInIcon({
  width = '1em',
  height = '1em',
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 75.767 76.248"
      fill="currentColor"
      width={width}
      height={height}
      aria-hidden="true"
      {...props}
    >
      {/* white = kept, black = cut out -> "in" becomes a transparent hole */}
      <mask id={MASK_ID}>
        <g transform="translate(-213.883,-1.783) matrix(1.018827,0,0,-1.018827,-29.95238,104.07061)">
          <path
            d="m 239.3298,95.036 c 0,2.96 2.4604,5.361 5.4956,5.361 l 63.376,0 c 3.0351,0 5.4956,-2.401 5.4956,-5.361 l 0,-64.117 c 0,-2.961 -2.4605,-5.361 -5.4956,-5.361 l -63.376,0 c -3.0352,0 -5.4956,2.4 -5.4956,5.361 l 0,64.117 z"
            fill="#fff"
          />
        </g>
        <g transform="translate(-25.593,-2.014) matrix(1.018827,0,0,-1.018827,-29.95238,104.07061)">
          <path
            d="m 77.9001,37.709 0,33.793 -11.2324,0 0,-33.793 11.2324,0 z m -5.6162,38.407 c 3.917,0 6.355,2.595 6.355,5.84 -0.073,3.315 -2.438,5.837 -6.2803,5.837 -3.8428,0 -6.355,-2.522 -6.355,-5.837 0,-3.245 2.4375,-5.84 6.207,-5.84 l 0.073,0 z"
            fill="#000"
          />
          <path
            d="m 83.1154,37.709 11.2325,0 0,18.872 c 0,1.01 0.073,2.019 0.3701,2.741 0.8115,2.017 2.6596,4.107 5.7627,4.107 4.0649,0 5.6909,-3.1 5.6909,-7.64 l 0,-18.08 11.2314,0 0,19.377 c 0,10.38 -5.542,15.21 -12.9321,15.21 -6.0591,0 -8.7197,-3.387 -10.1978,-5.694 l 0.075,0 0,4.9 -11.2325,0 c 0.1475,-3.171 0,-33.793 0,-33.793 z"
            fill="#000"
          />
        </g>
      </mask>

      {/* box takes currentColor; the "in" is masked out */}
      <g mask={`url(#${MASK_ID})`}>
        <g transform="translate(-213.883,-1.783) matrix(1.018827,0,0,-1.018827,-29.95238,104.07061)">
          <path d="m 239.3298,95.036 c 0,2.96 2.4604,5.361 5.4956,5.361 l 63.376,0 c 3.0351,0 5.4956,-2.401 5.4956,-5.361 l 0,-64.117 c 0,-2.961 -2.4605,-5.361 -5.4956,-5.361 l -63.376,0 c -3.0352,0 -5.4956,2.4 -5.4956,5.361 l 0,64.117 z" />
        </g>
      </g>
    </svg>
  );
}
