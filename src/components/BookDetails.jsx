import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const books = useSelector((state) => state.books.books); // Get books from Redux store
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Find the book by ID
    const foundBook = books.find((b) => b.id === parseInt(id));
    setBook(foundBook);
  }, [id, books]);

  if (!book) {
    return <div className="container mx-auto py-8">Book not found.</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-8">
      <h1 className="text-4xl font-bold text-red-600">{book.title}</h1>
      <p className="mt-2 text-lg text-gray-700">by {book.author}</p>
      {/* Display book category */}
      <p className="mt-4 text-gray-800">
        <span className="font-semibold">Category:</span> {book.category}
      </p>
      <p className="mt-4 text-gray-800">{book.description}</p>
      <p className="mt-4 text-lg font-semibold">Rating: {book.rating}</p>
      <Link
        to="/browse"
        className="mt-4 inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-300"
      >
        Back to Browse
      </Link>
    </div>
  );
};

export default BookDetails;
