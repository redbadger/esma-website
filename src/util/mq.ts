export enum BreakPoint {
  sm,
  md,
  lg,
  xl,
}

export const screenSizes = {
  [BreakPoint.sm]: 640,
  [BreakPoint.md]: 768,
  [BreakPoint.lg]: 1024,
  [BreakPoint.xl]: 1280,
};

export const mq = (size: BreakPoint) => {
  return `@media screen and (min-width: ${screenSizes[size]}px)`;
};
