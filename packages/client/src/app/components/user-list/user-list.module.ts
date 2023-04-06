import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UserListComponent } from './user-list.component';
import { UserCardModule } from '../user-card/user-card.module';

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, UserCardModule, MatProgressSpinnerModule],
  exports: [UserListComponent],
})
export class UserListModule {}
