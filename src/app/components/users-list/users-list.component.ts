import { Component, Input } from '@angular/core';
import { Users } from 'src/app/interfaces/users';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  @Input() users: Users[] = [];

  constructor() { }

}
