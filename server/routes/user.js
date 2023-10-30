import { chatGpt } from "../controller/chat.js";
import { getChatData } from "../controller/getChatData.js";
import { userData } from "../controller/userData.js";

import express from "express";

const router = express.Router();

router.post("/chat", chatGpt);
router.post("/userData", userData);
router.get("/getChatData", getChatData);

export default router;
