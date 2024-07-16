export interface Book {
  id:number;
  title: string;
  author: string;
  publicationYear: number;
  isbn10: string;
  isbn13: string;
  coverImage: string;
  synopsis: string;
  reviews: string;
}

export interface AppAsideItem {
  text: string;
  href: string;
}