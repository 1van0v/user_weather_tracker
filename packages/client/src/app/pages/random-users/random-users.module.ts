import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { randomUsersRoutes } from './random-users.routes';
import { RandomUsersComponent } from './random-users.component';
import { UserListModule } from 'src/app/components/user-list/user-list.module';

@NgModule({
  declarations: [RandomUsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(randomUsersRoutes),
    UserListModule,
  ],
})
export class RandomUsersModule {}
