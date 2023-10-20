import { NextApiRequest, NextApiResponse } from "next";

import prismadb from "../../../lib/prismadb";
import serverAuth from "../../../lib/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      return res.status(405).end();
    }

    const { currentUser } = await serverAuth(req,res);

    const favoritedEpisodes = await prismadb.video.findMany({
      where: {
        id: {
          in: currentUser?.favoriteIds,
        },
      },
    });

    return res.status(200).json(favoritedEpisodes);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
