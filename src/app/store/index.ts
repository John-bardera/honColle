import { ActionReducerMap } from '@ngrx/store';

import * as fromBook from './book.store';
import * as fromJwtToken from './jwt-token.store';

export interface AppState {
  jwtToken: fromJwtToken.State;
  book: fromBook.State;
}
export const reducers: ActionReducerMap<AppState> = {
  jwtToken: fromJwtToken.reducer,
  book: fromBook.reducer,
};
