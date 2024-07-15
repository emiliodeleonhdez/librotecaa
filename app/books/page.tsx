import AppButton from "../components/AppButton";
import BookCard from "../components/BookCard";
import { appBooks, exampleBook } from "../constants/constants";
import { Book } from "../interfaces/interfaces";

interface BooksPageProps {
  books: Book[];
}

const BooksPage: React.FC<BooksPageProps> = ({ books }) => {
  return (
    <>
      <h1>Libros</h1>
      <div className="flex flex-wrap gap-3 md:gap-8 items-center justify-center md:justify-normal">
        {appBooks.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
    </>
  );
};

export default BooksPage;
