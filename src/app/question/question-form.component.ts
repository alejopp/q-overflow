import { AuthService } from './../auth/auth.service';
import { QuestionService } from './question.service';
import { Question } from './question.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import icons from './icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
   styles: [`
    i { font-size: 3rem }
    small{display: block}
   `],
   providers: [QuestionService]
})
export class QuestionFormComponent implements OnInit {

  icons: Array<any> = icons;

  getIconVersion(icon: any){
    let version;
    if(icon.versions.font.includes('plain-wordmark')){
        version = 'plain-wordmark'
    }else{
        version = icon.versions.font[0];
    }

    if(icon.name=='illustrator'){
        version = icon.versions.svg[0];
    }
    return version;
  }

  constructor(
    private questionService:QuestionService,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/signin');
    }
  }

  onSubmit(form: NgForm){
    const q = new Question(
      form.value.title,
      form.value.description,
      new Date(),
      form.value.icon
    )
    console.log(form.value.icon);
    this.questionService.addQuestion(q)
    .subscribe(
      {
        next: (({_id}) => this.router.navigate(['questions',_id ])),
        error: (e) => this.authService.handleError(e),
        complete: () => console.log('complete')
      });
    form.resetForm();
  }

}
