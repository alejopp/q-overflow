import { Question } from './question.model';
import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';



@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
  providers: [QuestionService]
})
export class QuestionListComponent implements OnInit {

  questions: Question[] | undefined;
  loading = true;

  constructor(private questionService:QuestionService) { }

  ngOnInit(): void {
    this.questionService.getQuestions()
    .subscribe( (questions:Question[]) => {
      this.questions = questions;
      this.loading = false;
    });
  }

  

}
