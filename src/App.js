import "./App.css";
import { useState } from "react";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import NavBar from "./components/NavBar";

function App() {
  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  };

  return (
    <div>
      <NavBar />
      <div className="App">
        <BookCreate onCreate={createBook} />
        <div className="mt-10">
          <BookList
            books={books}
            onDelete={deleteBookById}
            onEdit={editBookById}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
