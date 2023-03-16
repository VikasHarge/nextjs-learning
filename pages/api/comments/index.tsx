import { CommentType } from "@/interfaces/types";
import { NextApiRequest, NextApiResponse } from "next";
import { comments } from "@/data/comments";


export default function handler (req : NextApiRequest , res : NextApiResponse<CommentType[] | CommentType>) {
    if(req.method === 'GET'){
        return res.status(200).json(comments)
    }
    if(req.method === 'POST'){
        const comment = req.body.comment
        const newComment : CommentType  = {
            id : comments.length + 1,
            text : comment,
        }

        comments.push(newComment);
        res.status(201).json(newComment)
    }
    
}
