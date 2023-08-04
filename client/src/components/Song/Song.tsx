import * as SongModel from '../../models/song';

export default function Song({ song }: SongModel.SongProps) {
  return (
    <div>
      <h2>{song.title}</h2>
      <h3>{song.artist}</h3>
      <h4>{song.album}</h4>
    </div>
  )
};