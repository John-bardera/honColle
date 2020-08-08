export interface Quiz {
  id: string;
  title: string;
  maker: string;
  questions: Array<Question>;
}
export interface Question {
  text: string;
  choices: Array<string>;
  correct: number;
}
