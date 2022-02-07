import { QuestionListComponent } from './question-list.component';
import { QuestionComponent } from './question.component';

export const QUESTION_ROUTES = [
  { path: '', component: QuestionListComponent },
  { path: ':id', component: QuestionComponent }
];