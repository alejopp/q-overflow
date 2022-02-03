import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Question } from '../question/question.model';
import { Answer } from './answer.model';
import { User } from '../auth/user.model';


@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})

export class AnswerComponent implements OnInit {

  @Input()
  question!: Question;
 

  onSubmit(form: NgForm) {
    const answer = new Answer(form.value.description,this.question,new Date, new User('Conan','Edogawa'));
    this.question.answers.unshift(answer);
    form.reset();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
