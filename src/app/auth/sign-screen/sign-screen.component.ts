import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'app-sign-screen',
  templateUrl: './sign-screen.component.html',
  styleUrls: ['./sign-screen.component.css']
})
export class SignScreenComponent implements OnInit {

  signInForm!: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() { }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    if (this.signInForm.valid) {
      const { email, password } = this.signInForm.value;
      const user = new User(email, password);
      console.log(user);
    }
  }

}
