import { Response, Request } from "express";
import { ISong } from "../../types/song";
import Song from "../../models/song";

export const getSongs = async (req: Request, res: Response): Promise<void> => {
  try {
    const songs: ISong[] = await Song.find().exec();
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

// export const addSong = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const body = req.body as Pick<ISong, "title" | "artist" | "album" | "audioFile" | "artwork">;

//     const song: ISong = new Song({
//       title: body.title,
//       artist: body.artist,
//       album: body.artist,
//       audioFile: body.audioFile,
//       artwork: body.artwork,
//       playCount: 0
//     });

//     const newSong: ISong = await song.save();
//     const allSongs: ISong[] = await Song.find();

//     res
//       .status(201)
//       .json({ message: "Song added", song: newSong, songs: allSongs });
//   } catch (error) {
//     throw error;
//   };
// };

export const addSong = async (req: Request, res: Response): Promise<void> => {
  const title = req.body.title;
  const artist = req.body.artist;
  const album = req.body.album;

  try {
    const newSong: ISong = await Song.create({
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
  try {
    const {
      params: { id },
      body
    } = req;

    const updateSong: ISong | null = await Song.findByIdAndUpdate(
      { _id:id },
      body
    );

    const allSongs: ISong[] = await Song.find();
    res.status(200).json({
      message: "Song updated",
      song: updateSong,
      songs: allSongs
    });
  } catch (error) {
    throw error
  }
};

export const deleteSong = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedSong: ISong | null = await Song.findByIdAndRemove(
      req.params.id
    );

    const allSongs: ISong[] = await Song.find();
    res.status(200).json({
      message: "Song deleted",
      song: deletedSong,
      songs: allSongs
    });
  } catch (error) {
    throw error
  }
};