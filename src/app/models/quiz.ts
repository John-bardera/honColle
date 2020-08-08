export interface Quiz {
  id: string;
  title: string;
  maker: string;
  Q: string;
  choices: Array<string>;
  correct: number;
}
