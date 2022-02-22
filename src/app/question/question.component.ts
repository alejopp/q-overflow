import { Component, OnDestroy, OnInit } from '@angular/core';
import { Question } from './question.model'
import { QuestionService } from './question.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  providers: [QuestionService]
})
export class QuestionComponent implements OnInit, OnDestroy {

  question!: Question;
  loading = true;
  sub: any;

  constructor(
    private questionService:QuestionService,
    private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe( params => {
      this.questionService.
      getQuestion(params['id'])
      .subscribe( question => {
        this.question = question;
        this.loading = false;
      });
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
