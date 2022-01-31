import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FormsModule }   from '@angular/forms';
import { QuestionComponent } from './question/question.component';
import { MomentModule } from 'ngx-moment';
import { AnswerComponent } from './answer/answer.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MomentModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
