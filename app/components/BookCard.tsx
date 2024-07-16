import React from "react";
import { Book } from "../interfaces/interfaces";
import AppButton from "./AppButton";

interface BookCardProps {
  book: Book;
  onOpenModal: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onOpenModal }) => {
  return (
    <div className="flex flex-col w-48 h-96 py-4 items-center group">
      <div className="relative shadow-lg w-full h-72">
        <img
          className="w-full h-full object-contain group-hover:opacity-50 transition-opacity duration-300 ease-in-out"
          src={book.coverImage}
          alt={book.title}
        />
        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <AppButton text="Apartar" onClick={onOpenModal} styles="w-44 border-black border-2 p-4 rounded-full" />
        </div>
      </div>
      <div className="flex flex-col py-2 w-full flex-1">
        <p className="font-bold text-base overflow-hidden text-ellipsis h-12">{book.title}</p>
        <p className="text-xs font-bold text-zinc-500">{book.author}</p>
      </div>
    </div>
  );
};

export default BookCard;
