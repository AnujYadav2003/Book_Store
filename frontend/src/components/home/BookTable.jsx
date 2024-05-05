import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BookTable = ({ books }) => {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead className="bg-gray-200">
        <tr>
          <th className="py-3 px-6 text-left">#</th>
          <th className="py-3 px-6 text-left">Title</th>
          <th className="py-3 px-6 text-left">Author</th>
          <th className="py-3 px-6 text-left">Publish Year</th>
          <th className="py-3 px-6 text-center">Operations</th> {/* Center align Operations */}
        </tr>
      </thead>

      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="border-b border-gray-300">
            <td className="py-3 px-6">{index + 1}</td>
            <td className="py-3 px-6">{book.title}</td>
            <td className="py-3 px-6">{book.author}</td>
            <td className="py-3 px-6">{book.publishyear}</td>
            <td className="py-3 px-6 text-center"> {/* Center align Operations */}
              <div className="flex justify-center"> {/* Center align icons */}
                <Link to={`books/details/${book._id}`} className="text-blue-500 mx-1">
                  <BsInfoCircle className="text-xl" />
                </Link>
                <Link to={`books/edit/${book._id}`} className="text-green-500 mx-1">
                  <AiOutlineEdit className="text-xl" />
                </Link>
                <Link to={`books/delete/${book._id}`} className="text-red-500 mx-1">
                  <MdOutlineDelete className="text-xl" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default BookTable;
