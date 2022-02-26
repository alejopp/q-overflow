import { Injectable } from '@angular/core';
import { Question } from './question.model';
import { environment } from '../../environments/environment';
import urljoin from 'url-join';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Answer } from '../answer/answer.model';

@Injectable()
export class QuestionService {

  private questionsUrl: string;

  constructor(private http: HttpClient) {
    this.questionsUrl = urljoin(environment.apiUrl, 'questions');
  }

  getQuestions(sort = '-createdAt') {
    return this.http.get<Question[]>(`${this.questionsUrl}?sort=${sort}`);
  }

  getQuestion(id:string){
    const url = urljoin(this.questionsUrl,id);
    return this.http.get<Question>(url);
  }

  getToken() {
    const token = localStorage.getItem('token');
    return `?token=${token}`;
  }

  addQuestion(question: Question): Observable<Question> {
    const body = JSON.stringify(question);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    const token = this.getToken();
    return this.http.post<Question>(this.questionsUrl + token, body, httpOptions);
  }

  addAnswer(answer: Answer): Observable<Answer> {
    const answerMod = {
      description: answer.description,
      question: {
        _id: answer.question._id
      }
    };
    const body = JSON.stringify(answerMod);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    const token = this.getToken();
    const url = urljoin(this.questionsUrl, answer.question._id!.toString(), 'answers');
    return this.http.post<Answer>(url + token, body, httpOptions);
  }


  handleError(error: any) {
    const errMsg = error.message ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.log(errMsg);
  }
}

