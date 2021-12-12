import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: "THIS IS OK" });
};

export default handler;
