import { NextApiRequest, NextApiResponse } from "next";

import prismadb from "../../../../lib/prismadb";
import serverAuth from "../../../../lib/serverAuth";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }
  try {
    await serverAuth(req, res);

    const { episodeId } = req.query;

    if (typeof episodeId !== "string") {
      throw new Error("Invalid ID");
    }

    if (!episodeId) {
      throw new Error("Invalid ID");
    }

    const episode = await prismadb.video
    .findUnique({
      where: {
        id: episodeId,
      },
    });

    if (!episode) {
      throw new Error("Invalid ID");
    }

    return res.status(200).json(episode);
  } catch (err) {
    console.log(err);
    res.status(400).end();
  }
}
