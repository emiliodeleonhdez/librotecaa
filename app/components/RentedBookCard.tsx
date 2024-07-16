import React from "react";
import { Book } from "../interfaces/interfaces";

interface RentedBookCardProps {
  book: Book;
}

const RentedBookCard: React.FC<RentedBookCardProps> = ({ book }) => {
  return (
    <div className="flex flex-col w-48 h-96 py-4 items-center group">
      <div className="relative shadow-lg w-full h-72">
        <img
          className="w-full h-full object-contain"
          src={book.coverImage}
          alt={book.title}
        />
      </div>
      <div className="flex flex-col py-2 w-full flex-1">
        <p className="font-bold text-base overflow-hidden text-ellipsis h-12">{book.title}</p>
        <p className="text-xs font-bold text-zinc-500">{book.author}</p>
      </div>
    </div>
  );
};

export default RentedBookCard;
