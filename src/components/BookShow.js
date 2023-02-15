import { XMarkIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

export default function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBooksContext();

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="flex justify-between w-full max-w-xs mx-auto shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      <div className="text-left">{content}</div>
      <div className="flex">
        <PencilSquareIcon
          className="h-5 w-5"
          onClick={handleEditClick}
          aria-hidden="true"
        />

        <XMarkIcon
          className="h-5 w-5"
          onClick={handleDeleteClick}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
