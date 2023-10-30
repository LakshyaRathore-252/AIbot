import mongoose from "mongoose";
import Chat from "../models/chatdata.js";

export const getChatData = async (req, res) => {
    try {
        // Fetch All the data
        const chatUser = await Chat.find();

        return res.status(200).json({
            success: true,
            message: "All User Fetched Successfully",
            chatusers: chatUser  // Send the fetched users in the response
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
