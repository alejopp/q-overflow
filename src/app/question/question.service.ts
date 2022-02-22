import { Injectable } from '@angular/core';
import { Question } from './question.model';
import { environment } from '../../environments/environment';
import urljoin from 'url-join';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

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


  addQuestion(question: Question): Observable<Question> {
    const body = JSON.stringify(question);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<Question>(this.questionsUrl, body, httpOptions);
  }


  handleError(error: any) {
    const errMsg = error.message ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.log(errMsg);
  }
}

