// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-red-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Online Library</Link>
        <div className="flex space-x-6">
          <Link to="/" className="hover:underline transition duration-300">Home</Link>
          <Link to="/browse" className="hover:underline transition duration-300">Browse Books</Link>
          <Link to="/add" className="hover:underline transition duration-300">Add Book</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;