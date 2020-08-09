import { Book } from '@/models/book';

export interface Quiz {
  id: string;
  title: string;
  maker: string;
  questions: Array<Question>;
  comments: Array<Comment>;
  book: Book;
}
export interface Question {
  text: string;
  choices: Array<string>;
  correct: number;
}
export interface Comment {
  maker: string;
  content: string;
  star: number;
}
