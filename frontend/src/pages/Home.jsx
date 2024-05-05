
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import BookTable from '../components/home/BookTable';
import BookCard from '../components/home/BookCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showtype, setshowtype] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <div className="flex justify-between mb-4">
        <button
          className={`px-4 py-2 ${showtype === 'table' ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded`}
          onClick={() => setshowtype('table')}
        >
          Table
        </button>
        <button
          className={`px-4 py-2 ${showtype === 'card' ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded`}
          onClick={() => setshowtype('card')}
        >
          Card
        </button>
      </div>
      <div className="bg-white p-6 rounded-md shadow-md mb-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Books List</h1>
          <Link to='books/create' className="text-blue-500">
            Add Book
          </Link>
        </div>

        {loading ? (
          <Spinner />
        ) : showtype === 'table' ? (
          <BookTable books={books} />
        ) : (
          <BookCard books={books} />
        )}
      </div>
    </div>
  );
};

export default Home;

