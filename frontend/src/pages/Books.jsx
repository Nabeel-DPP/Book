// src/components/BooksTable.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    axios.get('http://localhost:5555/lib/')
      .then(response => {
        setBooks(response.data); // Set the books data in state
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-5">
    <h2 className="mb-4">Books List</h2>
   


    <table className='w-full'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>Book ID</th>
          <th className='border border-slate-600 rounded-md'>Title</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Author
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
           Available Copies
          </th>
          
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
            {book._id}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {book.title}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.author}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.availableCopies}
            </td>
           
          </tr>
        ))}
      </tbody>
    </table>




  </div>
  );
};

export default Books;
