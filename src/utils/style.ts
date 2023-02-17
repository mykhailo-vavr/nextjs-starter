export const mediaDown = (breakpoint: number) => `@media (max-width: ${breakpoint}px)`;

export const mediaUp = (breakpoint: number) => `@media (min-width: ${breakpoint}px)`;

export const size = (px: number) => `${px / 16}rem`;

export const boxShadow = (hLength: number, vLength: number, blurRadius: number, spreadRadius: number, color: string) =>
  `box-shadow: ${size(hLength)} ${size(vLength)} ${size(blurRadius)} ${size(spreadRadius)} ${color}`;
