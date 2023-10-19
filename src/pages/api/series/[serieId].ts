import { NextApiRequest, NextApiResponse } from "next";

import prismadb from "../../../../lib/prismadb";
import serverAuth from "../../../../lib/serverAuth";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }
  try {
    await serverAuth(req, res);

    const { serieId } = req.query;

    if (typeof serieId !== "string") {
      throw new Error("Invalid ID");
    }

    if (!serieId) {
      throw new Error("Invalid ID");
    }

    const serie = await prismadb.series.findUnique({
      where: {
        id: serieId,
      },
      include: {
        videos: true,
      },
    });

    if (!serie) {
      throw new Error("Invalid ID");
    }

    return res.status(200).json(serie);
  } catch (err) {
    console.log(err);
    res.status(400).end();
  }
}
