import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import urljoin from 'url-join';
import { User } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  usersUrl: string;
  currentUser?: User | null;

  constructor(
    private http: HttpClient,
    private router:Router,
    public snackBar: MatSnackBar)
    {
      this.usersUrl = urljoin(environment.apiUrl, 'auth');
      if (this.isLoggedIn()) {
        const { userId, email, firstName, lastName } = JSON.parse(localStorage.getItem('user')!);
        this.currentUser = new User(email, '', firstName, lastName, userId);
      }
    }


  signin(user: User): Observable<any> {
    const body = JSON.stringify(user);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.post(urljoin(this.usersUrl, 'signin'), body, { headers })
        .pipe(
            map( (res: any) => {
                this.login(res);
                return res;
            }),
            catchError((error: Response) => {
              return throwError(() => {
                console.log(error);
                new Error(error.toString());
              });
            })
        );

  }

  signUp(user: User) {
    const body = JSON.stringify(user);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.usersUrl + '/signup', body, { headers }).pipe(
      map( (res: any) => {
        this.login(res);
        return res;
      }),
      catchError((error: Response) => {
        return throwError(() => {
          console.log(error);
          new Error(error.toString());
      });
    })
    );

}

// login(params: any) {
//   const { token, userId, firstName, lastName, email } = params;
//   localStorage.setItem('token', token);
//   localStorage.setItem('user', JSON.stringify({ userId, firstName, lastName, email }));
//   this.router.navigateByUrl('/');
// }

  login = ({ token, userId, firstName, lastName, email }:
    {token:string, userId:string, firstName:string, lastName:string, email:string}) => {
    this.currentUser = new User(email, '', firstName, lastName, userId);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify({ email, firstName, lastName, userId }));
    this.router.navigateByUrl('/');
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  logout() {
    localStorage.clear();
    this.currentUser = null;
    this.router.navigateByUrl('/signin');
  };

  showError(message:string) {
    this.snackBar.open(message, 'x', { duration: 5000 });
  }

  public handleError = (err: any) => {
    const { error: { error: { name } }, message } = err;
    console.log(err);
    console.log(name);
    if (name === 'TokenExpiredError') {
      this.showError('Your session has expired');
    } else if (name === 'JsonWebTokenError') {
      this.showError('A problem ocurred with your session');
    } else {
      this.showError(message || 'A problem has ocurred. Try again');
    }
    this.logout();
  }

}
