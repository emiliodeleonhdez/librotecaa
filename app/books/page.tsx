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
      <div className="flex flex-wrap">
        {appBooks.map((book) => (
          <article>
            <BookCard book={book} />
          </article>
        ))}
      </div>
    </>
  );
};

export default BooksPage;
