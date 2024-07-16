"use client";
import React, { useState } from "react";
import BookCard from "../components/BookCard";
import BookModal from "../components/Modal";
import SearchComponent from "../components/SearchBox";
import { appBooks } from "../constants/constants";
import { Book } from "../interfaces/interfaces";

interface BooksPageProps {
  books: Book[];
}

const BooksPage: React.FC<BooksPageProps> = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const openModal = (book: Book) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  return (
    <>
      <h1>Libros</h1>
      <SearchComponent />
      <div className="flex flex-wrap gap-3 md:gap-8 items-center justify-center">
        {appBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onOpenModal={() => openModal(book)}
          />
        ))}
      </div>
      {selectedBook && (
        <BookModal
          coverImage={selectedBook.coverImage}
          title={selectedBook.title}
          author={`Autor: ${selectedBook.author}`}
          synopsis={selectedBook.synopsis}
          isOpen={!!selectedBook}
          onCloseModal={closeModal}
        />
      )}
    </>
  );
};

export default BooksPage;
