import { AuthService } from './../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
    selector: 'app-signup-screen',
    templateUrl: './signup-screen.component.html'
    //styleUrls: ['./signup-screen.component.css']
  })


export class SignUpScreenComponent implements OnInit{

    signUpForm!:FormGroup;
    email = new FormControl('', [Validators.required, Validators.email]);

    constructor(private authService: AuthService){}

    ngOnInit(): void {
        this.signUpForm = new FormGroup({
            name: new FormControl(null,Validators.required),
            lastname: new FormControl(null,Validators.required),
            email: new FormControl(null, [
              Validators.required,
              Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            ]),
            password: new FormControl(null, Validators.required)
          });
    }

    onSubmit(){
        if (this.signUpForm.valid) {
            const { name, lastname, email, password } = this.signUpForm.value;
            const user = new User(name, lastname, email, password);
            this.authService.signUp(user)
              .subscribe(
                {
                  next: () => this.authService.login,
                  error: (e) => console.log(e)
                });
        }
    }

}
