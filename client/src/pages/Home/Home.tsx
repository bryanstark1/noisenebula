import SongCard from "../../components/SongCard/SongCard";
import './Home.css';

interface HomeProps {
  modalSongDetails: () => void,
  songs: any,
  onOpen: () => void,
  setSelectedSong: any,
  user: any
  fetchSongs: () => void,
  setNowPlaying: any,
}

export default function Home({ songs, modalSongDetails, onOpen, setSelectedSong, user, fetchSongs, setNowPlaying }: HomeProps) {
  const playCountDescending = [...songs].sort((a, b) =>
    a.playCount > b.playCount ? -1: 1,
  );
  const createdAtAscending = [...songs].sort((a, b) =>
    a.createAt > b.createAt ? 1: -1,
  );
  const favoritedDescending = [...songs].sort((a, b) =>
    a.favorites.length > b.favorites.length ? -1: 1,
  );

  const tempMostPlayedList = playCountDescending.map((s: any) => {
    return <SongCard
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
  const mostPlayedList = tempMostPlayedList.slice(0, 10);

  const tempJustAddedList = createdAtAscending.map((s: any) => {
    return <SongCard
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
  const justAddedList = tempJustAddedList.slice(0, 10);

  const tempMostFavoritedList = favoritedDescending.map((s: any) => {
    return <SongCard
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
  const mostFavoritedList = tempMostFavoritedList.slice(0, 10);


  return (
    <main className='home-page'>
      <h1>Home</h1>
      <div className='carousels'>
        <div className='carousel-container'>
          <h2 className='carousel-title'>Just Added</h2>
          <div className='song-card-container'>
            {justAddedList}
          </div>
        </div>
        <div className='carousel-container'>
        <h2 className='carousel-title'>Most Played</h2>
          <div className='song-card-container'>
            {mostPlayedList}
          </div>
        </div>
        <div className='carousel-container'>
          <h2 className='carousel-title'>Most Popular</h2>
          <div className='song-card-container'>
            {mostFavoritedList}
          </div>
        </div>
      </div>
    </main>
  );
};