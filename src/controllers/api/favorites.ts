import { Response, Request } from "express";
import Favorite from "../../models/favorite";


export const getFavorites = async (req: Request, res: Response): Promise<void> => {
  try {
    const favorite = await Favorite.find({"songId": req.body.songId, "userId": req.body.userId}).exec();
    res.status(200).json(favorite);
  } catch (error) {
    throw error;
  };
};