import { Question } from './question.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import icons from './icons';


@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
   styles: [`
    i { font-size: 3rem }
    small{display: block}
   `]
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
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const q = new Question(
      form.value.title,
      form.value.description,
      new Date(),
      form.value.icon
    )
    console.log(q);
  }

}
