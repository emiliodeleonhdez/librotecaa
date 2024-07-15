import React from "react";
import { Book } from "../interfaces/interfaces";
import AppButton from "./AppButton";

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="flex flex-col w-48 items-center group">
      <div className="shadow-lg">
        <img
          className="w-full h-72 object-contain group-hover:opacity-50 transition-opacity duration-300 ease-in-out"
          src={book.coverImage}
          alt="book"
        />
      </div>
      <div className="flex flex-col py-2 w-full">
        <p className="font-bold text-wrap text-base">{book.title}</p>
        <p className="text-xs font-bold text-zinc-500">{book.author}</p>
      </div>
    </div>
  );
};

export default BookCard;
