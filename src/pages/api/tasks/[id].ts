import { NextApiRequest, NextApiResponse } from "next";
import { connection } from "../../../utils/database";

export default async function id(req: NextApiRequest, res: NextApiResponse) {

    const {method, query, body} = req;

    switch(method) {
        case "GET":
            try {
                const text = "SELECT * FROM tasks WHERE id = $1"; 
                const values = [query.id];
                const response = await connection.query(text, values);

                if(!response.rows.length) {
                    return res.status(404).json({message: "task not found" });
                } 

                return res.json(response.rows[0]);
            } catch (error: any) {
                return res.status(500).json({ message: error.message});
            }
        case "PUT":
            try {
                const { title, description } = body;
                const text = "UPDATE tasks SET title = $1, description = $2 WHERE id = $3 RETURNING *"; 
                const values = [title, description, query.id];
                const response = await connection.query(text, values);

                if(!response.rows.length) {
                    return res.status(404).json({message: "task not found" });
                } 

                return res.json(response.rows[0]);
            } catch (error: any) {
                return res.status(500).json({ message: error.message});
            }
        case "DELETE":
            try {
                const text = "DELETE FROM tasks WHERE id = $1 RETURNING *"; 
                const values = [query.id];
                const response = await connection.query(text, values);

                if(!response.rowCount) {
                    return res.status(404).json({message: "task not found" });
                } 

                return res.json(response.rows[0]);
            } catch (error: any) {
                return res.status(500).json({ message: error.message});
            }
        default:
            return res.status(400).json("method not allowed");
    }

}