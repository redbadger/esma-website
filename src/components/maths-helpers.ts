type CartesianCoordinate = {
  x: number;
  y: number;
};

export type Arc = {
  start: CartesianCoordinate;
  end: CartesianCoordinate;
  radius: number;
};

/**
 * Creates a circular Arc.
 * @param {number} startTheta - The angle from the x-axis in complete turns.
 * @param {number} radius - The distance from the origin.
 *
 * Example usage:
 *
 * ```
 * getArc(0.25, 0.5, 1) // {start: {x:0, y: 1}, end: {x: -1, y: 0}, radius: 1}
 * ```
 */
export const getArc = (
  startTheta: number,
  endTheta: number,
  radius: number
): Arc => {
  return {
    start: getCartesianCoordinate(startTheta, radius),
    end: getCartesianCoordinate(endTheta, radius),
    radius,
  };
};

/**
 * Creates Cartesian Cartesiancoordinate from polar Cartesiancoordinate.
 * @param {number} theta - The angle from the x-axis in turns.
 * @param {number} r - The distance from the origin.
 *
 * Example usage:
 *
 * ```
 * getCartesianCoordinate(0.25, 1) // {x: 0, y: 1}
 * getCartesianCoordinate(1/8, 1) // {x: 0.707, y: 0.707}
 * getCartesianCoordinate(0, 2) // {x: 2, y: 0}
 * ```
 */
const getCartesianCoordinate = (
  theta: number,
  r: number
): CartesianCoordinate => {
  const x = r * Math.cos(2 * Math.PI * theta);
  const y = r * Math.sin(2 * Math.PI * theta);

  return { x, y };
};

export type CircularBar = {
  inner: Arc;
  outer: Arc;
};

const getCircularBar = (
  min: number,
  max: number,
  start: number,
  end: number,
  percentRatio: number
): CircularBar => {
  // inner arc points are determined by min, start and min, end
  const inner = getArc(start, end, min);
  // with the remaining available space
  const space = max - min;
  // we fit the percentage of the bar
  const fit = space * percentRatio;
  // and the outer arc is determined by the fit plus the min
  const outerRadius = min + fit;
  const outer = getArc(start, end, outerRadius);
  return {
    inner,
    outer,
  };
};

export const getPathDataForCircularBar = (
  min: number,
  max: number,
  start: number,
  end: number,
  percentRatio: number
): string => {
  const bar = getCircularBar(min, max, start, end, percentRatio);
  const largeArcFlag = end - start > 0.5 ? 1 : 0;

  const pathData = [
    `M ${bar.outer.start.x} ${bar.outer.start.y}`, // Move
    `A ${bar.outer.radius} ${bar.outer.radius} 0 ${largeArcFlag} 1 ${bar.outer.end.x} ${bar.outer.end.y}`, // Arc Clockwise
    `L ${bar.inner.end.x} ${bar.inner.end.y}`, // Line
    `A ${bar.inner.radius} ${bar.inner.radius} 0 ${largeArcFlag} 0 ${bar.inner.start.x} ${bar.inner.start.y}`, // Inner Arc Anti-Clockwise
  ].join(" ");
  return pathData;
};
