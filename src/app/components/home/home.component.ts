import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/users';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: Users[] = [];
  showAddUserForm: boolean = false;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.setUsersToSignal();
    this.users = this.dataService.getUsers$();
    console.log(this.users);
  }

  toggleAddUserForm() {
    this.showAddUserForm = !this.showAddUserForm;
  }

  addUser(user: Users) {
    this.dataService.addUser(user);
    this.showAddUserForm = false;
  }

}
