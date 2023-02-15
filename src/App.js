import "./App.css";
import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import NavBar from "./components/NavBar";
import BooksContext from "./context/books";

function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="App">
        <BookCreate />
        <div className="mt-10">
          <BookList />
        </div>
      </div>
    </div>
  );
}

export default App;
