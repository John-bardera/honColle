import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createAction, createFeatureSelector, createReducer, createSelector, on, props } from '@ngrx/store';

import { Book } from '@/models';

export const setBooks = createAction('[Book] SetBooks', props<{ books: Book[] }>());
export const setBook = createAction('[Book] SetBook', props<{ book: Book }>());
export const setSearchBooks = createAction('[Book] SetSearchBooks', props<{ books: Book[] }>());

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>();

export interface State extends EntityState<Book> {
  searchedBooks: Array<Book>;
}
export const initialState: State = adapter.getInitialState({
  searchedBooks: [],
});

export const bookReducer = createReducer(
  initialState,
  on(setBooks, (state, { books }) => {
    return adapter.setAll(books, state);
  }),
  on(setBook, (state, { book }) => {
    return adapter.upsertOne(book, state);
  }),
  on(setSearchBooks, (state, { books }) => {
    return { ...state, searchedBooks: books };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return bookReducer(state, action);
}

const { selectEntities, selectAll } = adapter.getSelectors();
export const selectFeature = createFeatureSelector<State>('book');
export const selectBooks = createSelector(selectFeature, selectAll);
export const selectBook = (id: string) => createSelector(createSelector(selectFeature, selectEntities), s => s[id]);
export const selectSearchedBooks = createSelector(selectFeature, s => s.searchedBooks);
