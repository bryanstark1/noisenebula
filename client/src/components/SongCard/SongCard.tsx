import * as SongModel from '../../models/song';
import { BsThreeDotsVertical } from "react-icons/bs"
import './SongCard.css';

interface SongCardProps {
  song: any
  onOpen: () => void,
}

export default function SongCard({ song, onOpen}: SongCardProps) {
  return (
    <div className='song-card'>
      <div className='song-info'>
        <h2>{song.title}</h2>
        <h3>{song.artist}</h3>
      </div>
      <BsThreeDotsVertical onClick={onOpen}/>
    </div>
  )
};