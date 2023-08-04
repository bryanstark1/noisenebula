export interface Song {
  _id: string,
  title: string,
  artist: string,
  album?: string,
  audioFile?: string,
  artwork?: string,
  playCount: number,
  createdAt: string,
  updatedAt: string,
}

export interface SongProps {
  song: Song,
}