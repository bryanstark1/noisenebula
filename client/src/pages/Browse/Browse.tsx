import SongCard from '../../components/SongCard/SongCard';
import * as SongModel from '../../models/song';
import "./Browse.css";

interface BrowseProps {
  modalSongDetails: () => void,
  songs: any,
  onOpen: () => void,
  setSelectedSong: any,
};

export default function Browse({ songs, onOpen, modalSongDetails, setSelectedSong}: BrowseProps) {
  const songsList = songs.map((s: any) => {
    return <SongCard song={s} key={s._id} onOpen={onOpen} modalSongDetails={modalSongDetails} setSelectedSong={setSelectedSong}/>
  });

  return (
    <main className='browse-page'>
      <h1>Browse</h1>
      <div>
        <div className='songs-list'>{songsList}</div>
      </div>
    </main>
  )
};