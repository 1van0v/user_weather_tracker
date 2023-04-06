import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedUsersComponent } from './saved-users.component';
import { UserListModule } from 'src/app/components/user-list/user-list.module';
import { savedUsersRoutes } from './saved-users.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SavedUsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(savedUsersRoutes),
    UserListModule,
  ],
})
export class SavedUsersModule {}
