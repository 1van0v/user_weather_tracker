import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-saved-users',
  templateUrl: './saved-users.component.html',
  styleUrls: ['./saved-users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SavedUsersComponent {}
