import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "../../../lib/prismadb";
import serverAuth from "../../../lib/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const { currentUser } = await serverAuth(req);

    const usersFavorites = await prismadb.user.findMany({
      where: {
        id:{
            in: currentUser?.favoriteIds,
        },
      },
    });

    return res.status(200).json(usersFavorites);
  } catch (err) {
    console.log(err);
    return res.status(400).end();
  }
}
