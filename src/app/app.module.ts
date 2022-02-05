import { SignUpScreenComponent } from './auth/signup-screen/signup-screen.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { QuestionComponent } from './question/question.component';
import { MomentModule } from 'ngx-moment';
import { AnswerComponent } from './answer/answer.component';
import { SignInScreenComponent } from './auth/signin-screen/signin-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerComponent,
    SignInScreenComponent,
    SignUpScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
