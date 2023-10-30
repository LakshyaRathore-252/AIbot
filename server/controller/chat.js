import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
import User from '../models/chatdata.js'

// This will load env file
dotenv.config();

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(config);

export const chatGpt = async (req, res) => {
    try {
        const { prompt, email } = req.body;

        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            max_tokens: 512,
            temperature: 0,
            prompt: prompt,
        })

        const ans = completion.data.choices[0].text;

        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Add the chat to the user's chats array
        user.chats.push({ prompt, res: ans });

        // Save the user to the database
        await user.save();

        res.status(200).json({ message: 'Chat saved successfully', data: completion.data.choices[0] });
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.error(error.response.data);
            console.error(error.response.status);
            console.error(error.response.headers);
            res.status(error.response.status).json({ message: error.message });
        } else if (error.request) {
            console.error(error.request);
            res.status(500).json({ message: 'No response received from OpenAI API' });
        } else {
            res.status(500).json({ message: 'Error setting up request' });
        }
    }
};
