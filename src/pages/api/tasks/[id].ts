import { NextApiRequest, NextApiResponse } from "next";

export default function id(req: NextApiRequest, res: NextApiResponse) {

    const {method} = req;

    switch(method) {
        case "GET":
            return res.json("getting unique task");
        case "PUT":
            return res.json("updating unique task");
        case "DELETE":
            return res.json("deleting a task");
        default:
            return res.status(400).json("method not allowed");
    }

}