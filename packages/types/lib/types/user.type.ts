import { UserImage } from './user-image.type';
import { UserLocation } from './user-location';
import { Username } from './username.type';

export interface User {
  gender: 'male' | 'female';
  name: Username;
  image: UserImage;
  location: UserLocation;
  email: string;
}
