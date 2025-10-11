import { Vehicle, City, VehiclePrice } from "../types/vehicle";

export const cities: City[] = [
  { id: "nice", name: "Nice city", displayName: "Nice City" },
  { id: "antibes", name: "Antibes/Juan", displayName: "Antibes/Juan" },
  { id: "cannes", name: "Cannes", displayName: "Cannes" },
  { id: "monaco", name: "Monaco /Cap d'Ail", displayName: "Monaco/Cap d'Ail" },
  { id: "st-tropez", name: "St Tropez", displayName: "Saint-Tropez" },
];

// Prix pour Class E
const classEPrices: Record<string, VehiclePrice> = {
  nice: { transfer: 90, hourly: 90, fullDay: 750 },
  antibes: { transfer: 120, hourly: 90, fullDay: 750 },
  cannes: { transfer: 150, hourly: 90, fullDay: 750 },
  monaco: { transfer: 150, hourly: 90, fullDay: 750 },
  "st-tropez": { transfer: 400, hourly: 90, fullDay: 750 },
};

// Prix pour Class V
const classVPrices: Record<string, VehiclePrice> = {
  nice: { transfer: 110, hourly: 110, fullDay: 880 },
  antibes: { transfer: 150, hourly: 110, fullDay: 880 },
  cannes: { transfer: 180, hourly: 110, fullDay: 880 },
  monaco: { transfer: 180, hourly: 110, fullDay: 880 },
  "st-tropez": { transfer: 500, hourly: 110, fullDay: 880 },
};

// Prix pour Class S
const classSPrices: Record<string, VehiclePrice> = {
  nice: { transfer: 150, hourly: 130, fullDay: 1040 },
  antibes: { transfer: 190, hourly: 130, fullDay: 1040 },
  cannes: { transfer: 220, hourly: 130, fullDay: 1040 },
  monaco: { transfer: 220, hourly: 130, fullDay: 1040 },
  "st-tropez": { transfer: 600, hourly: 130, fullDay: 1040 },
};

// Prix pour Maybach
const maybachPrices: Record<string, VehiclePrice> = {
  nice: { transfer: 300, hourly: 300, fullDay: 2400 },
  antibes: { transfer: 350, hourly: 300, fullDay: 2400 },
  cannes: { transfer: 450, hourly: 300, fullDay: 2400 },
  monaco: { transfer: 450, hourly: 300, fullDay: 2400 },
  "st-tropez": { transfer: 850, hourly: 300, fullDay: 2400 },
};

export const vehicles: Vehicle[] = [
  {
    id: "mercedes-e",
    name: "Mercedes Class - E",
    passengers: 3,
    image: "/class-e.svg",
    prices: classEPrices,
  },
  {
    id: "mercedes-v",
    name: "Mercedes Class - V",
    passengers: 7,
    image: "/cars/class-v/class-v.svg",
    prices: classVPrices,
  },
  {
    id: "mercedes-s",
    name: "Mercedes Class - S",
    passengers: 3,
    image: "/cars/class-s/class-s.svg",
    prices: classSPrices,
  },
  {
    id: "mercedes-maybach",
    name: "Mercedes Maybach",
    passengers: 3,
    image: "/cars/maybach/maybach.svg",
    prices: maybachPrices,
  },
];
