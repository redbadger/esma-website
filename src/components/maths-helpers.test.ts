import { getCartesianCoordinate, CartesianCoordinate } from "./maths-helpers";

describe(getCartesianCoordinate, () => {
  it("0 turns with radius 1 is (1,0)", () => {
    const cartesian: CartesianCoordinate = { x: 1, y: 0 };
    expect(getCartesianCoordinate(0, 1)).toEqual(cartesian);
  });

  it("0.25 turns with radius 1 is (0,1)", () => {
    const received = getCartesianCoordinate(0.25, 1);

    expect(received.x).toBeCloseTo(0, 15);
    expect(received.y).toBeCloseTo(1, 15);
  });
});
