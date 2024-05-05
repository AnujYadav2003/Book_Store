import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
  const [title, settitle] = useState('');
  const [author, setauthor] = useState('');
  const [publishyear, setpublishyear] = useState('');
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setloading(true);
    axios.get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setauthor(response.data.author);
        setpublishyear(response.data.publishyear);
        settitle(response.data.title);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
      });
  }, []);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishyear,
    };

    setloading(true);
    axios.put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setloading(false);
        navigate('/');
      })
      .catch((error) => {
        setloading(false);
        alert('An error happened');
        console.log(error);
      });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-md shadow">
      <BackButton />

      <h1 className="text-3xl font-bold mb-4">Edit Book</h1>

      {loading ? <Spinner /> : ''}

      <div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setauthor(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Publish Year</label>
          <input
            type="text"
            value={publishyear}
            onChange={(e) => setpublishyear(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          onClick={handleEditBook}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default EditBook;
