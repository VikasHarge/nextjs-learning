import { CommentType } from "@/interfaces/types";
import { NextApiRequest, NextApiResponse } from "next";
import { comments } from "@/data/comments";


export default function handler (req : NextApiRequest , res : NextApiResponse<CommentType[]>) {
    res.status(200).json(comments)
}
