import * as SongModel from '../../models/song';
import { BsThreeDotsVertical } from "react-icons/bs"
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import './SongCard.css';

interface SongCardProps {
  modalSongDetails: () => void,
  song: any,
  onOpen: () => void,
  setSelectedSong: (value: string) => void,
  user: any,
}

export default function SongCard({ song, onOpen, modalSongDetails, setSelectedSong, user}: SongCardProps) {

  function openModal() {
    onOpen();
    modalSongDetails();
    setSelectedSong(song);
  }



  return (
    <div className='song-card'>
      {user &&
        <FavoriteButton user={user} song={song} />
      }
      <div className='song-info'>
        <p className='song-title'>{song.title}</p>
        <p className='song-artist'>{song.artist}</p>
        -
        <p className='song-album'>{song.album && song.album}</p>
      </div>
      <BsThreeDotsVertical size={28} onClick={openModal} className='options'/>
    </div>
  )
};