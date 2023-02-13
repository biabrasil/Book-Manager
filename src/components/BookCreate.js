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
    <div className="w-full max-w-xs bg-black">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <h2>Register a new book:</h2>
          <form onSubmit={hadleSubmit}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={title} onChange={handleChange}></input>
            <button>Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}
