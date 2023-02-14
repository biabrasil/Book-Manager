import { useState } from "react";

export default function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const hadleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };
  return (
    <div className="w-full max-w-xs mx-auto">
      <div className="bg-white mt-10">
        <div class="mb-4">
          <h2 className="font-semibold text-gray-900 text-xl pb-6">
            Register a new book
          </h2>

          <form onSubmit={hadleSubmit}>
            <label className="flex text-gray-400 py-2 rounded-md text-md font-medium mb-2">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={title}
              onChange={handleChange}
            ></input>
            <button className="rounded-md bg-gray-900 text-white text-center px-5 py-2 mt-6 w-full">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
