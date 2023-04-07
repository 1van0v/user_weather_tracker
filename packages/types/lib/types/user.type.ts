import { UserImage } from './user-image.type';
import { UserLocation } from './user-location';
import { Username } from './username.type';

export interface User {
  _id?: 'string';
  gender: 'male' | 'female';
  name: Username;
  picture: UserImage;
  location: UserLocation;
  email: string;
}
