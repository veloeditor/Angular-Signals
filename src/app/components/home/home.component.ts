import { Component } from '@angular/core';
import { Users } from 'src/app/interfaces/users';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  users: Users[] = [];

  constructor() {
  }

}
