import { Book } from "../interfaces/interfaces";

export const asideLinks = [
  { text: "Inicio", href: "/" },
  { text: "Libros", href: "/books" },
  { text: "Mis Alquileres", href: "/rentals" },
  { text: "Buscar", href: "/search" },
  { text: "Contacto", href: "/contact" },
];

export const exampleBook: Book = {
  title: "Cien años de soledad",
  author: "Gabriel García Márquez",
  publicationYear: 1967,
  isbn10: "1234567890",
  isbn13: "123-4567890123",
  coverImage: "https://m.media-amazon.com/images/I/71YoFJSz3LL._AC_UF1000,1000_QL80_.jpg",
  synopsis: "Esta es una sinopsis del libro.",
  reviews: "Reseñas del libro.",
};
