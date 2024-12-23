import { Link } from 'react-router-dom';

const Home = () => {
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy', 'Biography', 'Mystery', 'Romance', 'Thriller'];

  const popularBooks = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "1984", author: "George Orwell" },
    { id: 4, title: "Pride and Prejudice", author: "Jane Austen" },
    { id: 5, title: "Moby Dick", author: "Herman Melville" },
    { id: 6, title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { id: 7, title: "The Hobbit", author: "J.R.R. Tolkien" },
    { id: 8, title: "Fahrenheit 451", author: "Ray Bradbury" },
    { id: 9, title: "The Alchemist", author: "Paulo Coelho" },
    { id: 10, title: "Brave New World", author: "Aldous Huxley" },
  ];

  return (
    <div className="container mx-auto py-8 px-4 md:px-8">
      <h1 className="text-4xl font-bold text-center text-gray-800">Welcome to the Online Library</h1>
      
      <h2 className="text-2xl font-semibold mt-6 text-gray-700">Book Categories</h2>
      <ul className="flex flex-wrap justify-center space-x-4 mt-4">
        {categories.map((category) => (
          <li key={category}>
            <Link
              to={`/browse/${category}`}
              className="text-red-600 hover:underline transition duration-300 ease-in-out transform hover:scale-105"
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-700">Popular Books</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {popularBooks.map((book) => (
          <li key={book.id} className="border border-gray-300 rounded-lg p-4 flex flex-col justify-between bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <div>
              <Link to={`/books/${book.id}`} className="text-red-600 font-bold text-lg hover:underline">{book.title}</Link>
              <p className="text-gray-600">by {book.author}</p>
            </div>
            <Link to={`/books/${book.id}`} className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-300">
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
