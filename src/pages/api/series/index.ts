import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "../../../../lib/prismadb";
import serverAuth from "../../../../lib/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
    return res.status(405).end();
  }
    await serverAuth(req,res);

    const series = await prismadb.series.findMany();

    return res.status(200).json(series);
  } catch (err) {
    console.log(err);
    return res.status(400).end();
  }
}
