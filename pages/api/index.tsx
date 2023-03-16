import { NextApiRequest, NextApiResponse } from "next";

type resData = {
    name : string,
    age : number
}

export default function handler (req : NextApiRequest , res : NextApiResponse<resData>) {
    res.status(200).json({ name : "Vikas", age : 26 })
}
