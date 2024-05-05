import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ books }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {books.map((item) => (
                <div key={item._id} className="border p-4 rounded-md shadow-md border-black">
                    <h2 className="text-lg font-semibold mb-2">{item.publishyear}</h2>
                    <h4 className="text-gray-600 mb-4">{item._id}</h4>
                    <div className="flex items-center mb-2">
                    <span role="img" aria-label="Book" className="text-3xl mr-2">📖</span>
                        <h2 className="text-xl font-bold">{item.title}</h2>
                    </div>
                    <div className="flex items-center mb-2">
                        <span role="img" aria-label="Author" className="text-2xl mr-2">👤</span>
                        <h2 className="text-lg">{item.author}</h2>
                    </div>
                    <div className="flex space-x-2">
                        <Link to={`/books/details/${item._id}`} className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                            Details
                        </Link>
                        <Link to={`/books/edit/${item._id}`} className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
                            Edit
                        </Link>
                        <Link to={`/books/delete/${item._id}`} className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">
                            Delete
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookCard;
