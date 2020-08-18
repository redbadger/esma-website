const Locations: { [x: string]: Location } = require("./uk-regions-data.json");
type Location = {
  position: { x: number; y: number };
  name: string;
};

export const UkRegions = Locations;
