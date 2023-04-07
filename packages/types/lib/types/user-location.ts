import { Coordinates } from './coordinates.type';
import { Street } from './street.type';

export interface UserLocation {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: Coordinates;
}
