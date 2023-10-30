import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
    created_At: {
        type: Date,
        default: Date.now(),
    },
    chats: [{
        prompt: {
            type: String,
            required: true,
        },
        res: {
            type: String,
            required: true,
        },
        askedON: {
            type: Date,
            default: Date.now(),
        }
    }]
});

export default mongoose.model("User", userSchema);
