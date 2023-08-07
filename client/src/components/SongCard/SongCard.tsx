import * as SongModel from '../../models/song';
import { BsThreeDotsVertical } from "react-icons/bs"
import './SongCard.css';

interface SongCardProps {
  modalContent: () => void,
  song: any,
  onOpen: () => void,
  setSelectedSong: (value: string) => void,
}

export default function SongCard({ song, onOpen, modalContent, setSelectedSong}: SongCardProps) {

  function onClick() {
    onOpen();
    modalContent();
    setSelectedSong(song);
  }

  return (
    <div className='song-card'>
      <div className='song-info'>
        <h2>{song.title}</h2>
        <h3>{song.artist}</h3>
      </div>
      <BsThreeDotsVertical onClick={onClick}/>
    </div>
  )
};