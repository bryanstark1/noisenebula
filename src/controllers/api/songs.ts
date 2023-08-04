import { Response, Request } from "express";
import { ISong } from "../../types/song";
import Song from "../../models/song";

export const getSongs = async (req: Request, res: Response): Promise<void> => {
  try {
    const songs = await Song.find().exec();
    res.status(200).json(songs);
  } catch (error) {
    throw error;
  };
};

export const getSong = async (req: Request, res: Response): Promise<void> => {
  const songId = req.params.id;
  try {
    const song = await Song.findById(songId).exec();
    res.status(200).json(song)
  } catch (error) {
    throw error;
  };
};

export const addSong = async (req: Request, res: Response): Promise<void> => {
  const title = req.body.title;
  const artist = req.body.artist;
  const album = req.body.album;

  try {
    const newSong = await Song.create({
      title: title,
      artist: artist,
      album: album,
    });

    res.status(201).json(newSong);
  } catch (error) {
    throw error;
  };
};

export const updateSong = async (req: Request, res: Response): Promise<void> => {
  interface SongBody {
    title: string,
    artist: string,
    album: string,
  };

  interface UpdateSong {
    id: string,
  }

  const songId = req.params.id;
  const updatedData = req.body;

  try {
    const song = await Song.findById(songId).exec();

    if (!song) {
      throw ('error');
    };

    song.title = updatedData.title;
    song.artist = updatedData.artist;
    song.album = updatedData.album;

    const updatedSong = await song.save();
    res.status(200).json(updatedSong);
  } catch (error) {
    throw error
  }
};

export const deleteSong = async (req: Request, res: Response): Promise<void> => {
  const songId = req.params.id;

  try {
    const song = await Song.findByIdAndRemove(songId).exec();
    res.sendStatus(204);
  } catch (error) {
    throw error
  };
};