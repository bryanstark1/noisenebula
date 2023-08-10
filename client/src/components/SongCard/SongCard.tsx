import { BsThreeDotsVertical } from "react-icons/bs"
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import './SongCard.css';

interface SongCardProps {
  modalSongDetails: () => void,
  song: any,
  onOpen: () => void,
  setSelectedSong: (value: string) => void,
  user: any,
  fetchSongs: () => void,
};

export default function SongCard({ song, onOpen, modalSongDetails, setSelectedSong, user, fetchSongs }: SongCardProps) {
  function openModal() {
    onOpen();
    modalSongDetails();
    setSelectedSong(song);
  };


  return (
    // <li className='song-card'>
    //   <div className='song-info'>
    //     <p className='song-title'>{song.title}</p>
    //     <p className='song-artist'>{song.artist}</p>
    //     -
    //     <p className='song-album'>{song.album && song.album}</p>
    //   </div>
    //   <div className='icon-container'>
    //     {user &&
    //       <FavoriteButton user={user} song={song} fetchSongs={fetchSongs} />
    //     }
    //     <BsThreeDotsVertical size={28} onClick={openModal} className='options'/>
    //   </div>
    // </li>
    <tr className='song-card'>
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