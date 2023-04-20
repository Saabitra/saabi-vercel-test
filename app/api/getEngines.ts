import type { NextApiRequest, NextApiResponse } from "next";
import openai from "@/lib/chatgpt";

type Option = {
    value: string;
    label: string;
}

type Data = {
    modelOptions: Option[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const model = await openai.listModels().then((res) => res.data.data);

    const modelOptions = model.map((model) => ({
        value: model.id,
        label: model.id,
    }));

    res.status(200).json({ modelOptions });
}