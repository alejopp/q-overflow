import { Injectable } from '@angular/core';
import { Question } from './question.model';
import { environment } from '../../environments/environment';
import urljoin from 'url-join';


import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionService {

  private questionsUrl: string;

  constructor(private http: HttpClient) {
    this.questionsUrl = urljoin(environment.apiUrl, 'questions');
  }

  getQuestions() {
    return this.http.get<Question[]>(this.questionsUrl);
  }

  getQuestion(id:string){
    const url = urljoin(this.questionsUrl,id);
    return this.http.get<Question>(url);
  }


  handleError(error: any) {
    const errMsg = error.message ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg);
  }
}

