import { Route } from '@angular/router';
import { RandomUsersComponent } from './random-users.component';

export const randomUsersRoutes: Route[] = [
  { path: '', component: RandomUsersComponent, pathMatch: 'full' },
];
