import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-signin-screen',
  templateUrl: './signin-screen.component.html',
  styleUrls: ['./signin-screen.component.css']
})
export class SignInScreenComponent implements OnInit {

  signInForm!: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private authService: AuthService) { }

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
      this.authService.signin(user)
        .subscribe(
          {
            next: () => this.authService.login,
            error: () => this.authService.handleError
          }
        );
    }
  }
}
