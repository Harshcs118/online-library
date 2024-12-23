import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/booksSlice';
import { useState } from 'react';

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    customCategory: '', // New state for custom category
    description: '',
    rating: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      // Reset customCategory if a different category is selected
      ...(name === 'category' && value !== 'Other' ? { customCategory: '' } : {}),
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    if (!formData.title || !formData.author || (!formData.category && !formData.customCategory) || !formData.description || !formData.rating) {
      alert('Please fill in all fields!');
      return;
    }

    if (formData.rating < 0 || formData.rating > 5) {
      alert('Rating must be between 0 and 5!');
      return;
    }

    // Use custom category if "Other" is selected
    const finalCategory = formData.category === 'Other' ? formData.customCategory : formData.category;

    // Add book to Redux store and navigate to Browse page
    dispatch(addBook({ id: Date.now(), ...formData, category: finalCategory }));
    navigate('/browse');
  };

  return (
    <div className="container mx-auto py-8 px-4 md:px-8">
      <h1 className="text-3xl font-bold text-center mb-6">Add a New Book</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-gray-50 p-6 rounded shadow-md"
      >
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Book Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        {/* Author */}
        <div className="mb-4">
          <label htmlFor="author" className="block text-sm font-medium text-gray-700">
            Author
          </label>
          <input
            id="author"
            name="author"
            type="text"
            placeholder="Author Name"
            value={formData.author}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          >
            <option value="">Select a category</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Biography">Biography</option>
            <option value="Other">Other</option>
          </select>
          {formData.category === 'Other' && (
            <input
              type="text"
              name="customCategory"
              placeholder="Specify your category"
              value={formData.customCategory}
              onChange={handleChange}
              className="w-full mt-2 px-4 py- 2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          )}
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Brief Description of the Book"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        {/* Rating */}
        <div className="mb-4">
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
            Rating (0-5)
          </label>
          <input
            id="rating"
            name="rating"
            type="number"
            step="0.1"
            placeholder="Rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;