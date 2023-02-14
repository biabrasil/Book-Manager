import { useState } from "react";

export default function BookEdit({book, onSubmit}) {
  const [title, setTitle] = useState(book.title);
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, title);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="">
        <label className="flex text-gray-400 py-2 rounded-md text-md font-medium mb-2">
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={title}
          onChange={handleChange}
        ></input>
        <button className="rounded-md bg-gray-900 text-white text-center px-5 py-2 mt-6 w-full">
          Save
        </button>
      </form>
    </div>
  );
}
