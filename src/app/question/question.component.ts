import { Component, OnInit } from '@angular/core';
import { Question } from './question.model'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question:Question = new Question(
    'Android Question',
    'blablbaablablababalbablabaalbabalbbalbaablb',
    new Date,
    'devicon-android-plain colored'
  );
  
  constructor() {}

  ngOnInit(): void {
  }

}
