export interface Book {
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

//   // Example of a book
//   const exampleBook: Book = {
//     title: "One Hundred Years of Solitude",
//     author: "Gabriel García Márquez",
//     publicationYear: 1967,
//     isbn10: "1234567890",
//     isbn13: "123-4567890123",
//     coverImage: "https://example.com/image.jpg",
//     synopsis: "This is a synopsis of the book.",
//     reviews: "Reviews of the book."
//   };
