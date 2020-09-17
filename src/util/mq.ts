export enum BreakPoint {
  xs,
  sm,
  md,
  lg,
  xl,
}

export const screenSizes = {
  [BreakPoint.xs]: 388,
  [BreakPoint.sm]: 640,
  [BreakPoint.md]: 768,
  [BreakPoint.lg]: 1024,
  [BreakPoint.xl]: 1280,
};

export const mq = (size: BreakPoint) => {
  return `@media screen and ${minWidth(size)}`;
};

export const maxWidth = (size: BreakPoint) => {
  return `(max-width: ${screenSizes[size] - 1}px)`;
};

export const minWidth = (size: BreakPoint) => {
  return `(min-width: ${screenSizes[size]}px)`;
};
