import FavoriteButton from '../FavoriteButton/FavoriteButton';
import PlayButton from '../PlayButton/PlayButton';
import OptionsButton from '../OptionsButton/OptionsButton';
import { BsThreeDotsVertical, BsFillPlayFill } from 'react-icons/bs';
import './SongCard.css';


interface SongCardProps {
  modalSongDetails: () => void,
  song: any,
  onOpen: () => void,
  setSelectedSong: (value: string) => void,
  user: any,
  fetchSongs: () => void,
  setNowPlaying: (value: string | null) => void,
}

export default function SongCard({ song, onOpen, modalSongDetails, setSelectedSong, user, fetchSongs, setNowPlaying }: SongCardProps){
  function openModal() {
    onOpen();
    modalSongDetails();
    setSelectedSong(song);
  };

  return (
    <div className='song-card'>
      <div className='image-container'>
        <div className='button-container'>
          {user &&
          <FavoriteButton user={user} song={song} fetchSongs={fetchSongs} />
        }
          <PlayButton song={song} setNowPlaying={setNowPlaying}/>
          <OptionsButton song={song} onOpen={onOpen} modalSongDetails={modalSongDetails} setSelectedSong={setSelectedSong}/>
          {/* <BsThreeDotsVertical size={28} onClick={openModal} className='options'/> */}
        </div>
        <img src={song.artwork} alt={song.album} />
      </div>
      <h3>{song.title}</h3>
      <h4>{song.artist}</h4>
    </div>
  )
};