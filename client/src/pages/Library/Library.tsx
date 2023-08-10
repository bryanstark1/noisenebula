import SongCard from '../../components/SongCard/SongCard';
import "./Library.css";

interface LibraryProps {
  modalSongDetails: () => void,
  songs: any,
  onOpen: () => void,
  setSelectedSong: any,
  user: any
  fetchSongs: () => void,
};

export default function Library({ songs, onOpen, modalSongDetails, setSelectedSong, user, fetchSongs }: LibraryProps) {
  const songsList = songs.map((s: any) => {
    if (s.favorites.includes(user._id)) {
      return <SongCard
        song={s}
        key={s._id}
        onOpen={onOpen}
        modalSongDetails={modalSongDetails}
        setSelectedSong={setSelectedSong}
        user={user}
        fetchSongs={fetchSongs}
      />;
    } else {
      return null;
    };
  });

  return (
    <main className='library-page'>
      <h1>Library</h1>
      <table className='songs-list'>
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
          </tr>
        </thead>
        <tbody>
          {songsList}
        </tbody>
      </table>
    </main>
  )
};