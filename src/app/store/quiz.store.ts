import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createAction, createFeatureSelector, createReducer, createSelector, on, props } from '@ngrx/store';

import { Quiz } from '@/models';

export const setQuizzes = createAction('[Quiz] SetQuizs', props<{ quizzes: Quiz[] }>());
export const setQuiz = createAction('[Quiz] SetQuiz', props<{ quiz: Quiz }>());

export const adapter: EntityAdapter<Quiz> = createEntityAdapter<Quiz>();

export interface State extends EntityState<Quiz> {}
export const initialState: State = adapter.getInitialState({});

export const quizReducer = createReducer(
  initialState,
  on(setQuizzes, (state, { quizzes }) => {
    return adapter.setAll(quizzes, state);
  }),
  on(setQuiz, (state, { quiz }) => {
    return adapter.upsertOne(quiz, state);
  })
);

export function reducer(state: State | undefined, action: Action) {
  return quizReducer(state, action);
}

const { selectEntities, selectAll } = adapter.getSelectors();
export const selectFeature = createFeatureSelector<State>('quiz');
export const selectQuizzes = createSelector(selectFeature, selectAll);
export const selectQuiz = (id: string) => createSelector(createSelector(selectFeature, selectEntities), s => s[id]);
