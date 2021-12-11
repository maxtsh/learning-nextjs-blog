import { MongoClient } from "mongodb";
import { dbUrl } from "global/DB";
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const client = await MongoClient.connect(dbUrl);
  const db = client.db();

  if (req.method === "GET") {
    const data = await db
      .collection("posts")
      .find()
      .sort({ _id: -1 })
      .toArray();
    res.status(200).json({ data, message: "Successfully fetched all posts" });
  } else {
    res.status(200).json({ message: "THIS IS OK" });
  }
};

export default handler;
