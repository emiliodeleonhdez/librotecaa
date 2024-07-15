import React from "react";
import { Book } from "../interfaces/interfaces";

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="w-48 p-2">
      <div className=" h-64 shadow-lg">
        <img className="w-full h-full object-contain" src={book.coverImage} alt="book" />
      </div>
      <div className="flex flex-col py-2 w-full">
        <p className="font-bold text-wrap text-base">{book.title}</p>
        <p className="text-xs">{book.author}</p>
      </div>
    </div>
  );
};

export default BookCard;
