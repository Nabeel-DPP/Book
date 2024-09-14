import express from 'express';
import { User } from '../models/userSchema.js';
import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, password, membershipType } = req.body;

    // Check if user already exists
    // const existingUser = await User.findOne({ email });
    // if (existingUser) {
    //   return res.status(400).send({ message: 'User already exists' });
    // }

    // // Hash password
    // const hashedPassword = await bcrypt.hash(password, 10);

    
    const newUser = new User({
      name,
      email,
      password,
      membershipType
    });

    
    await newUser.save();



   






    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error registering user is occuring' });
  }
});

export default router