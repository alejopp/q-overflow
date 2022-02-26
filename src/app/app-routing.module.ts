import { QUESTION_ROUTES } from './question/question.routing';
import { QuestionScreenComponent } from './question/question-screen.component';
import { SignInScreenComponent } from './auth/signin-screen/signin-screen.component';
import { RouterModule, Routes } from '@angular/router';
import { SignUpScreenComponent } from './auth/signup-screen/signup-screen.component';

const routes: Routes = [
  {path:'' ,  component: QuestionScreenComponent, pathMatch:'full'},
  {path:'signin',component: SignInScreenComponent},
  {path:'signup',component: SignUpScreenComponent},
  {path:'questions', children: QUESTION_ROUTES},
];

export const Routing = RouterModule.forRoot(routes);



