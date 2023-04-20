// import { query } from "firebase/firestore";
import query from "@/lib/queryApi";
import { Message } from "@/typings";
import type { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";
import { adminDb } from "@/firebaseAdmin";

type Data = {
    answer: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { prompt, chatId, model, session } = req.body;

    if (!prompt) {
        res.status(400).json({ answer: "No prompt provided" });
        return;
    }

    if (!chatId) {
        res.status(400).json({ answer: "No chatId provided" });
        return;
    }

    // ChatGPT Query
    const response = await query(prompt, chatId, model);

    const message: Message = {
        text: response || "SAABI was unable to find an answer for that!😔",
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: "SAABI",
            name: "SAABI",
            avatar: "https://imgur.com/a/10fHblu",
        },
    };

    await adminDb
        .collection("users")
        .doc(session?.user?.email)
        .collection("chats")
        .doc(chatId)
        .collection("messages")
        .add(message);

    res.status(200).json({ answer: message.text });
}// import { query } from "firebase/firestore";
import query from "@/lib/queryApi";
import { Message } from "@/typings";
import type { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";
import { adminDb } from "@/firebaseAdmin";

type Data = {
    answer: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { prompt, chatId, model, session } = req.body;

    if (!prompt) {
        res.status(400).json({ answer: "No prompt provided" });
        return;
    }

    if (!chatId) {
        res.status(400).json({ answer: "No chatId provided" });
        return;
    }

    // ChatGPT Query
    const response = await query(prompt, chatId, model);

    const message: Message = {
        text: response || "SAABI was unable to find an answer for that!😔",
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: "SAABI",
            name: "SAABI",
            avatar: "https://imgur.com/a/10fHblu",
        },
    };

    await adminDb
        .collection("users")
        .doc(session?.user?.email)
        .collection("chats")
        .doc(chatId)
        .collection("messages")
        .add(message);

    res.status(200).json({ answer: message.text });
}