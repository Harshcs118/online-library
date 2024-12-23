import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

const BrowseBooks = () => {
  const books = useSelector((state) => state.books.books); // Get books from Redux store
  const { category } = useParams(); // Get category from URL params
  const [search, setSearch] = useState(""); // State to handle search input

  // Filter books based on category and search input
  const filteredBooks = books.filter((book) => {
    const matchesCategory = category ? book.category === category : true; // Check if the book matches the category
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase()); // Check if the book matches the search input
    return matchesCategory && matchesSearch; // Return true if both conditions are met
  });

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        {category ? `Books in "${category}"` : "Browse All Books"}
      </h1>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by title or author"
          className="w-full md:w-1/2 px-4 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-red-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Update search state on input change
        />
      </div>

      {/* Display filtered books or a message if none are found */}
      {filteredBooks.length === 0 ? (
        <p className="text-center text-gray-500">
          No books found. Try adjusting your search or category filter.
        </p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <li
              key={book.id}
              className="border border-gray-300 p-4 rounded-lg shadow hover:shadow-lg transition duration-300 bg-white"
            >
              <Link
                to={`/books/${book.id}`}
                className="text-red-600 font-bold hover:underline block mb-2"
              >
                {book.title}
              </Link>
              <p className="text-gray-600 mb-2">by {book.author}</p>
              <Link
                to={`/books/${book.id}`}
                className="text-sm bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-300"
              >
                View Details
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BrowseBooks;