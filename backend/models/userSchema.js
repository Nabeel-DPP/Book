import mongoose from 'mongoose';
const userSchema = mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  membershipType: { type: String, enum: ['basic', 'premium'], required: true },
  borrowedBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }] // Reference to the Books collection
});

// const User = mongoose.model('User', userSchema);
// module.exports = User;
export const User = mongoose.model('User', userSchema);
  