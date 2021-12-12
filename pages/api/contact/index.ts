import { MongoClient } from "mongodb";
import { dbUrl } from "global/DB";
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

interface FormData {
  name: string;
  email: string;
  text: string;
}

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "POST") {
    const client = await MongoClient.connect(dbUrl);
    const db = client.db();
    const data: FormData = req.body;
    try {
      await db.collection("contacts").insertOne(data);
      client.close();
      res.status(200).json({ message: "Successfully sent your message" });
    } catch (err) {
      console.log(err);
    }
  } else {
    res.status(200).json({ message: "THIS IS OK" });
  }
};

export default handler;
