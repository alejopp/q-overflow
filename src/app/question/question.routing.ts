import { QuestionFormComponent } from './question-form.component';
import { QuestionScreenComponent } from './question-screen.component';
import { QuestionComponent } from './question.component';

export const QUESTION_ROUTES = [
  { path: '', component: QuestionScreenComponent },
  { path: 'new', component: QuestionFormComponent },
  { path: ':id', component: QuestionComponent }
];
