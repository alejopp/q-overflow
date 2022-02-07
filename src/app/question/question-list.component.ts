import { Question } from './question.model';
import { Component, OnInit } from '@angular/core';

const q = new Question(
  'How can I reuse a component in Android',
  'This is my question.......',
  new Date,
  'devicon-android-plain-wordmark colored'
);

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
})
export class QuestionListComponent implements OnInit {

  questions: Question[] = new Array(10).fill(q);

  constructor() { }

  ngOnInit(): void {
  }

}
