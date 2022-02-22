import { QuestionService } from './../question/question.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Question } from '../question/question.model';
import { Answer } from './answer.model';
import SweetCroll  from 'sweet-scroll'


@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css'],
  providers: [QuestionService]
})

export class AnswerComponent implements OnInit {

  @Input()
  question!: Question;
  sweetScroll: SweetCroll;

  constructor(private questionService: QuestionService) {
    this.sweetScroll = new SweetCroll();
   }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const answer = new Answer(
      form.value.description,
      this.question
    );
    this.questionService
    .addAnswer(answer)
    .subscribe({
      next: (ans) => {
        this.question.answers.unshift(ans);
        this.sweetScroll.to('#title');
      },
      error: (e) => console.log(e),
      complete: () => console.log('completed')
    });
  form.reset();

  }



}
