import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';
import { Users } from '../interfaces/users';
import { Observable, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // get the users from the allUsers array and return as an observable and store in a signal
  users: WritableSignal<Users[]> = signal([]);

  constructor() { }

  allUsers = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@email.com',
      phone: '555-555-5555',

      address: '707 John Revere Place',
      city: 'Boston',
      state: 'MA',
      zip: '02108'
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane@email.com',
      phone: '707-707-7070',
      address: '123 Main St',
      city: 'St. Louis',
      state: 'MO',
      zip: '63101'
    },
    {
      firstName: 'Gary',
      lastName: 'Wilson',
      email: 'gary@email.com',
      phone: '615-111-2222',
      address: '214 Saxon Mist Drive',
      city: 'Nashville',
      state: 'TN',
      zip: '37013'
    },
    {
      firstName: 'Sally',
      lastName: 'Jones',
      email: 'sally.jones@email.com',
      phone: '615-222-3333',
      address: '123 Main St',
      city: 'Nashville',
      state: 'TN',
      zip: '37216'
    }
  ] as Users[];

  // this simulates the api call to get data
  private getUsersFromApi(): Observable<Users[]> {
    return of(this.allUsers);
  }

  // this loads the data into the writeable signal and is called by the users-list component
  setUsersToSignal(): void {
    this.getUsersFromApi().subscribe(users => {
      this.users.set(users);
    });
  }

  // a computed read-only signal for users to expose to other components
  getUsers$: Signal<Users[]> = computed(() => this.users());

  // add a user to the allUsers array
  addUser(user: Users): void {
    this.allUsers.push(user);
    this.setUsersToSignal();
  }

}
