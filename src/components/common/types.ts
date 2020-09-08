export type Fluid = {
  originalName: string;
  base64: string;
  sizes: string;
  src: string;
  srcSet: string;
  aspectRatio: number;
};

export type ChildImageSharp = {
  fluid: Fluid;
};

export type Node = {
  childImageSharp: ChildImageSharp;
};

export type ImageNode = {
  node: Node;
};
