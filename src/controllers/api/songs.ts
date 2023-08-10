import { Response, Request } from "express";
import Song from "../../models/song";


// const {
//   S3Client,
//   PutObjectCommand
// } = require("@aws-sdk/client-s3");

// const s3Config = {
//   accessKeyId: process.env.AWS_ACCESS_KEY,
//   secretAccessKey: process.env.AWS_ACCESS_SECRET,
//   region: "us-east-1",
// };

// const s3Client = new S3Client(s3Config);


export const getSongs = async (req: Request, res: Response): Promise<void> => {
  try {
    res.json(await Song.find().exec());
  } catch (error) {
    res.status(400).json(error);
  };
};

export const getSong = async (req: Request, res: Response): Promise<void> => {
  try {
    res.json(await Song.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  };
};

export const addSong = async (req: Request, res: Response): Promise<void> => {
  try {
    res.json(await Song.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  };
};

export const updateSong = async (req: Request, res: Response): Promise<void> => {
  const songId = req.params.id;
  try {
    res.json(await Song.findByIdAndUpdate(songId, req.body, { new: true }));
  } catch (error) {
    res.status(400).json(error);
  };
};

export const deleteSong = async (req: Request, res: Response): Promise<void> => {
  try {
    res.json(await Song.findByIdAndRemove(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  };
};