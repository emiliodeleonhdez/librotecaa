import BookCard from "../components/BookCard";
import { exampleBook } from "../constants/constants";

const LibrosPage: React.FC = () => {
  return (
    <div>
      <h1>Libros</h1>
      <BookCard book={exampleBook}/>
    </div>
  );
};

export default LibrosPage;
