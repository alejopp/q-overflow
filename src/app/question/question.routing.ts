import { QuestionFormComponent } from './question-form.component';
import { QuestionListComponent } from './question-list.component';
import { QuestionComponent } from './question.component';

export const QUESTION_ROUTES = [
  { path: '', component: QuestionListComponent },
  { path: ':new', component: QuestionFormComponent },
  { path: ':id', component: QuestionComponent }
];