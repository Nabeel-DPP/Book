import express from 'express';
import { User } from '../models/userSchema.js';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const router = express.Router();

router.post('/', async (request, response) => {
  try {
    const { name, email, password, membershipType } = request.body;
    const userCount = await User.countDocuments();
    const userId = `A${String(userCount + 1).padStart(3, '0')}`;

    // Check if user already exists
    // const existingUser = await User.findOne({ email });
    // if (existingUser) {
    //   return res.status(400).send({ message: 'User already exists' });
    // }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    
    // const newUser = new User({
    //   name,
    //   email,
    //   password,
    //   membershipType
    // });

    
    // const  newBook=  await newUser.save();

    const newUser = await User.create({
      userId,
      name,
      email,
      password: hashedPassword,
      membershipType
    });

   






    response.status(201).send(newUser);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: 'Error registering user is occuring' , error: error.message});
  }
});

export default router