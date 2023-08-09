import SongCard from '../../components/SongCard/SongCard';
import * as SongModel from '../../models/song';
import "./Browse.css";

interface BrowseProps {
  modalSongDetails: () => void,
  songs: any,
  onOpen: () => void,
  setSelectedSong: any,
  user: any
};

export default function Browse({ songs, onOpen, modalSongDetails, setSelectedSong, user}: BrowseProps) {
  const songsList = songs.map((s: any) => {
    return <SongCard
      song={s}
      key={s._id}
      onOpen={onOpen}
      modalSongDetails={modalSongDetails}
      setSelectedSong={setSelectedSong}
      user={user}
    />
  });

  return (
    <main className='browse-page'>
      <h1>Browse All</h1>
      <div className='songs-list'>{songsList}</div>
    </main>
  )
};