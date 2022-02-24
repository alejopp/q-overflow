import { QuestionListComponent } from './question/question-list.component';
import { QuestionFormComponent } from './question/question-form.component';
import { SignUpScreenComponent } from './auth/signup-screen/signup-screen.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { QuestionComponent } from './question/question.component';
import { MomentModule } from 'ngx-moment';
import { AnswerComponent } from './answer/answer.component';
import { SignInScreenComponent } from './auth/signin-screen/signin-screen.component';
import { Routing } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { AuthService } from './auth/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerComponent,
    SignInScreenComponent,
    SignUpScreenComponent,
    QuestionFormComponent,
    QuestionListComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule,
    Routing,
    HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
