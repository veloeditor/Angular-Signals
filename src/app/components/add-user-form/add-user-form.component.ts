import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { Users } from 'src/app/interfaces/users';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent {
  @Output() addUser = new EventEmitter<Users>();

  addUserForm = this.fb.group({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });

  constructor(private fb: FormBuilder) { }

  onSubmit(form: UntypedFormGroup) {
    this.addUser.emit(form.value);
    this.addUserForm.reset();
  }
}
