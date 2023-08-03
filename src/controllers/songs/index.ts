import { Response, Request } from "express";
import { ISong } from "../../types/song";
import Song from "../../models/song";

const getSongs = async (req: Request, res: Response): Promise<void> => {
  try {
    const songs: ISong[] = await Song.find();
    res.status(200).json({ songs });
  } catch (error) {
    throw error;
  }
};

const addSong = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<ISong, "title" | "artist" | "album" | "audioFile" | "artwork">;

    const song: ISong = new Song({
      title: body.title,
      artist: body.artist,
      album: body.artist,
      audioFile: body.audioFile,
      artwork: body.artwork,
      playCount: 0
    })

    const newSong: ISong = await song.save();
    const allSongs: ISong[] = await Song.find();

    res
      .status(201)
      .json({ message: "Song added", song: newSong, songs: allSongs });
  } catch (error) {
    throw error
  }
};