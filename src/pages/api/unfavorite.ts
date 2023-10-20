import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "../../../lib/prismadb";

import { without } from "lodash";
import serverAuth from "../../../lib/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      return res.status(405).end();
    }
    const { currentUser } = await serverAuth(req, res);

    const { movieId } = req.body;
    let updatedUser;

    const existingMovie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!existingMovie) {
      const existingEpisode = await prismadb.video.findUnique({
        where: {
          id: movieId,
        },
      });
      if (!existingEpisode) {
        throw new Error("Invalid ID");
      }
      const updatedFavoriteIds = without(currentUser.favoriteIds, movieId);

      updatedUser = await prismadb.user.update({
        where: {
          email: currentUser.email || "",
        },
        data: {
          favoriteIds: updatedFavoriteIds,
        },
      });
    }

    const updatedFavoriteIds = without(currentUser.favoriteIds, movieId);

    updatedUser = await prismadb.user.update({
      where: {
        email: currentUser.email || "",
      },
      data: {
        favoriteIds: updatedFavoriteIds,
      },
    });

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
}
