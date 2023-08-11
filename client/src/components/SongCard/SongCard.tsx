import { BsThreeDotsVertical, BsFillPlayFill } from "react-icons/bs"
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import './SongCard.css';

interface SongCardProps {
  modalSongDetails: () => void,
  song: any,
  onOpen: () => void,
  setSelectedSong: (value: string) => void,
  user: any,
  fetchSongs: () => void,
  setNowPlaying: (value: string | null) => void,
};

export default function SongCard({ song, onOpen, modalSongDetails, setSelectedSong, user, fetchSongs, setNowPlaying }: SongCardProps) {
  function openModal() {
    onOpen();
    modalSongDetails();
    setSelectedSong(song);
  };

  function onClick() {
    setNowPlaying(null)
    setNowPlaying(song.audioFile);
  };

  return (
    <tr className='song-card'>
      <button onClick={onClick}><BsFillPlayFill /></button>
      <td className='song-artwork'><img src={song.artwork} alt="" /></td>
      <td className='song-title'>{song.title}</td>
      <td className='song-artist'>{song.artist}</td>
      <td className='song-album'>{song.album}</td>
      <td className='icon-container'>
      {user &&
        <FavoriteButton user={user} song={song} fetchSongs={fetchSongs} />
      }
        <BsThreeDotsVertical size={28} onClick={openModal} className='options'/>
      </td>
    </tr>
  );
};