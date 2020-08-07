export interface BookApiResponse {
  Items: Array<{ Item: Book }>;
  count: number;
  hits: number;
  page: number;
  pageCount: number;
}
export interface ParsedBookApiResponse {
  books: Array<Book>;
  count: number;
  hits: number;
  page: number;
  pageCount: number;
}
export interface Book {
  affiliateUrl: string;
  author: string;
  authorKana: string;
  isbn: string;
  itemCaption: string;
  itemUrl: string;
  largeImageUrl: string;
  limitedFlag: 0 | 1;
  mediumImageUrl: string;
  publisherName: string;
  seriesName: string;
  seriesNameKana: string;
  size: string;
  smallImageUrl: string;
  title: string;
  titleKana: string;
  id: string;
  isRead: boolean;
}
