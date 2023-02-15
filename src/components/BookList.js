import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";

export default function BookList() {
  const { books } = useContext(BooksContext);
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div>{renderedBooks}</div>;
}
