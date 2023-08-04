import Song from '../../components/Song/Song';
// import * as SongModel from '../../models/song';

export default function Browse({ songs }: any) {
  const songsList = songs.map((s: any) => {
    return <Song song={s} key={s._id}/>
  });

  return (
    <div>
      <h1>Browse</h1>
      <div>
        <div>{songsList}</div>
      </div>
    </div>
  )
};