import SongListItem from '../../components/SongListItem/SongListItem';
import "./Browse.css";

interface BrowseProps {
  modalSongDetails: () => void,
  songs: any,
  onOpen: () => void,
  setSelectedSong: any,
  user: any
  fetchSongs: () => void,
  setNowPlaying: any,
};

export default function Browse({ songs, onOpen, modalSongDetails, setSelectedSong, user, fetchSongs, setNowPlaying }: BrowseProps) {
  const songsList = songs.map((s: any) => {
    return <SongListItem
      song={s}
      key={s._id}
      onOpen={onOpen}
      modalSongDetails={modalSongDetails}
      setSelectedSong={setSelectedSong}
      user={user}
      fetchSongs={fetchSongs}
      setNowPlaying={setNowPlaying}
    />
  });


  return (
    <main className='browse-page'>
      <h1>Browse All</h1>
      {songsList}
    </main>
  )
};