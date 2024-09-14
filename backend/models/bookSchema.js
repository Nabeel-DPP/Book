import mongoose from 'mongoose';
const bookSchema = mongoose.Schema({
    bookId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    availableCopies: { type: Number, required: true },
    totalCopies: { type: Number, required: true },
    borrowedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] // Reference to the Users collection
  });
  
//   const Book = mongoose.model('Book', bookSchema);
//   module.exports = Book;


  export const Book = mongoose.model('Book', bookSchema);
  











 