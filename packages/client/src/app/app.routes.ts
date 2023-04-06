import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'random-users',
    loadChildren: () =>
      import('./pages/random-users/random-users.module').then(
        (m) => m.RandomUsersModule,
      ),
  },
  {
    path: 'saved-users',
    loadChildren: () =>
      import('./pages/saved-users/saved-users.module').then(
        (m) => m.SavedUsersModule,
      ),
  },
  // { path: '**', redirectTo: 'random-users' },
];
