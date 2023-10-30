import { Injectable, Signal, computed, signal } from '@angular/core';
import { Users } from '../interfaces/users';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  allUsers = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@email.com',
      phone: '555-555-5555',
      address: '123 Main St',
      city: 'Boston',
      state: 'MA',
      zip: '02108'
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane@email.com',
      phone: '555-555-5555',
      address: '123 Main St',
      city: 'Boston',
      state: 'MA',
      zip: '02108'
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

  // a writtable signal for users
  users = signal(this.allUsers);

  // a computed read-only signal for users to expose to other components
  getUsers: Signal<Users[]> = computed(() => this.users());
}
