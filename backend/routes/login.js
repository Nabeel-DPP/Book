import express from 'express';
import { User } from '../models/userSchema.js';
import bcrypt from 'bcryptjs'; // Uncomment if you're using password hashing

const router = express.Router();

router.post('/', async (request, response) => {
    console.log("Route Hit");
  try {
    console.log("Request Reached at Server");
    const { email, password } = request.body;

    console.log(email);
    console.log(password);
     console.log("Hello from Route")
    // Check if user exists
    const user = await User.findOne({ email });
    console.log("Email Matched" , user);
    if (!user) {
      return response.status(400).send({ message: 'User not found' });
    }

    // Compare the entered password with the stored password
    const isMatch = await bcrypt.compare(password, user.password); 
    
    // Uncomment if you're using bcrypt
    //  isMatch = password === user.password; // Plain text comparison (not recommended for production)
    
    if (!isMatch) {
      return response.status(400).send({ message: 'Invalid password Enter Correct Password' });
    }

    // If user is valid, return success response
    response.status(200).send({ message: 'Login successful', user });
  } catch (error) {
    console.log("Request Error at Server");
    response.status(500).send({ message: 'Error logging in user' });
  }
});

export default router;
