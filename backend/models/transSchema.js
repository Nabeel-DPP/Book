import mongoose from "mongoose";
const transactionSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User model
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true }, // Reference to the Book model
    borrowDate: { type: Date, required: true, default: Date.now },
    returnDate: { type: Date },
    isReturned: { type: Boolean, default: false },
    fine: { type: Number, default: 0 }
  });
  
//   const Transaction = mongoose.model('Transaction', transactionSchema);
//   module.exports = Transaction;
export const Transaction = mongoose.model('Transaction', transactionSchema);