import { comments } from "@/data/comments";
import { CommentType } from "@/interfaces/types";
import { NextApiRequest, NextApiResponse } from "next";



export default function handler ( req : NextApiRequest , res : NextApiResponse<CommentType | string> ){

    const commentId  = req.query?.commentId as string

    const comment = comments.find((comment : CommentType )=> comment.id === parseInt(commentId) )

    if(!comment){
        return res.status(404).json('comment not found')
    }

    res.status(201).json(comment)

}