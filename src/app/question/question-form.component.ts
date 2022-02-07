import { Question } from './question.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
})
export class QuestionFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const q = new Question(
      form.value.title,
      form.value.description,
      new Date(),
      'none'
    )
    console.log(q);
  }

}
