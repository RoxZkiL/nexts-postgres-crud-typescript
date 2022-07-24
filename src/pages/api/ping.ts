import { NextApiRequest, NextApiResponse } from "next"
import { connection } from "../../utils/database";

type Data = {
  msg: string;
  time: string;
}

export default async function hello(req: NextApiRequest, res: NextApiResponse<Data>) {
  const response = await connection.query("SELECT NOW()");
  return res.json({msg: "pong", time: response.rows[0].now});
}