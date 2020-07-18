export interface Book {
  isbn: string;
  title: string;
  thumbnail: string;
  authors: Array<Author>;
}

export interface Author {
  name: string;
}
