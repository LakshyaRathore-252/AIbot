import mongoose from 'mongoose';
import User from '../models/chatdata.js'

export const userData = async (req, res) => {
    try {
        const { name, email, mobile } = req.body;

        // Create a new user instance
        const newUser = new User({ name, email, mobile });

        // Save the user to the database
        await newUser.save();

        res.status(200).json({ message: 'User saved successfully' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

