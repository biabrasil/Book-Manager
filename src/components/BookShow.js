export default function BookShow({ book }) {
  return (
    <div className="w-full max-w-xs mx-auto shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      {book.title}
    </div>
  );
}
