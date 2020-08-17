const Locations: { [x: string]: Location } = require("./locations.json");
type Location = {
  position: { x: number; y: number };
  name: string;
};

export const UkRegions = Locations;
