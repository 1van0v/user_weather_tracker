import { Route } from '@angular/router';
import { SavedUsersComponent } from './saved-users.component';

export const savedUsersRoutes: Route[] = [
  { path: '', component: SavedUsersComponent, pathMatch: 'full' },
];
