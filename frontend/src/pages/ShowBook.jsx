// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import BackButton from '../components/BackButton';
// import Spinner from '../components/Spinner';
// const ShowBook = () => {
//   const [book, setbook] = useState({});
//   const [loading, setloading] = useState(false);
//   const {id}=useParams();
//   useEffect(() => {
//     setloading(true);
//     axios.get(`http://localhost:5555/books/${id}`)
//       .then((response) => {
//         setbook(response.data);
//         setloading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setloading(false);
//       })
//   }, [])




//   return (
//     <div>
//       <BackButton />
//       <h1>Show Book</h1>
//       {loading ? (<Spinner />) : (
//         <div>
//           <div>
//             <span>Id</span>
//             <span>{book._id}</span>
//           </div>
//           <div>
//             <span>Title</span>
//             <span>{book.title}</span>
//           </div>
//           <div>
//             <span>Author</span>
//             <span>{book.author}</span>
//           </div>
//           <div>
//             <span>Publish Year</span>
//             <span>{book.publishyear}</span>
//           </div>
//           <div>
//             <span>Create Time</span>
//             <span>{new Date(book.createdAt).toString()}</span>
//           </div>
//           <div>
//             <span>Last Updated Time</span>
//             <span>{new Date(book.updatedAt).toString()}</span>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }
// export default ShowBook;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-md shadow">
      <BackButton />

      <h1 className="text-3xl font-bold mb-4 text-indigo-800">Show Book</h1>

      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className="flex mb-4">
            <span className="w-1/4 font-semibold text-gray-700">Id</span>
            <span className="w-3/4 text-red-900">{book._id}</span>
          </div>
          <div className="flex mb-4">
            <span className="w-1/4 font-semibold text-gray-700">Title</span>
            <span className="w-3/4 text-green-700">{book.title}</span>
          </div>
          <div className="flex mb-4">
            <span className="w-1/4 font-semibold text-gray-700">Author</span>
            <span className="w-3/4 text-green-700">{book.author}</span>
          </div>
          <div className="flex mb-4">
            <span className="w-1/4 font-semibold text-gray-700">Publish Year</span>
            <span className="w-3/4 text-green-700">{book.publishyear}</span>
          </div>
          {/* <div className="flex mb-4">
            <span className="w-1/4 font-semibold text-gray-700">Create Time</span>
            <span className="w-3/4 text-orange-700">{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="flex mb-4">
            <span className="w-1/4 font-semibold text-gray-700">Last Updated Time</span>
            <span className="w-3/4 text-red-700">{new Date(book.updatedAt).toString()}</span>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default ShowBook;
