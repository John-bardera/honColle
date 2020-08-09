import { ActionReducerMap } from '@ngrx/store';

import * as fromBook from './book.store';
import * as fromJwtToken from './jwt-token.store';
import * as fromQuiz from './quiz.store';

export interface AppState {
  jwtToken: fromJwtToken.State;
  book: fromBook.State;
  quiz: fromQuiz.State;
}
export const reducers: ActionReducerMap<AppState> = {
  jwtToken: fromJwtToken.reducer,
  book: fromBook.reducer,
  quiz: fromQuiz.reducer,
};
