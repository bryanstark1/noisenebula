interface ISong {
  _id: string
  title: string
  artist: string
  album: string
  audioFile: string
  artwork: string
  playCount: number
  createdAt?: string
  updatedAt?: string
}

interface SongProps {
  song: ISong
}

type ApiDataType = {
  message: string
  status: string
  songs: ISong[]
  song?: ISong
}