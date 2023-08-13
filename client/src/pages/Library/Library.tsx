import SongListItem from '../../components/SongListItem/SongListItem';
import "./Library.css";

interface LibraryProps {
  modalSongDetails: () => void,
  songs: any,
  onOpen: () => void,
  setSelectedSong: any,
  user: any
  fetchSongs: () => void,
  setNowPlaying: any,
};

export default function Library({ songs, onOpen, modalSongDetails, setSelectedSong, user, fetchSongs, setNowPlaying }: LibraryProps) {
  const songsList = songs.map((s: any) => {
    if (s.favorites.includes(user._id)) {
      return <SongListItem
        song={s}
        key={s._id}
        onOpen={onOpen}
        modalSongDetails={modalSongDetails}
        setSelectedSong={setSelectedSong}
        user={user}
        fetchSongs={fetchSongs}
        setNowPlaying={setNowPlaying}
      />;
    } else {
      return null;
    };
  });

  return (
    <main className='library-page'>
      <h1>Favorites</h1>
      <table className='songs-list'>
        <thead>
          <tr>
            <th></th>
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