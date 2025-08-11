export interface VehiclePrice {
  transfer: number;
  hourly: number;
  fullDay: number;
}

export interface Vehicle {
  id: string;
  name: string;
  passengers: number;
  image: string;
  prices: Record<string, VehiclePrice>; // clé = ville
}

export interface City {
  id: string;
  name: string;
  displayName: string;
}
