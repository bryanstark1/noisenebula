import { updateSong } from "../../utilities/songs-service";
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

  async function onPlay(changeValue: number) {
    setNowPlaying(song.audioFile);
    const updatedSongData = {
      _id: song._id,
      title: song.title,
      artist: song.artitle,
      album: song.album,
      audioFile: song.audioFile,
      artwork: song.artwork,
      playCount: song.playCount+changeValue
    }
    await updateSong(song._id, updatedSongData);
  };

  return (
    <tr className='song-card'>
      <td className='song-artwork'><button className='play-button' onClick={() => onPlay(1)}><BsFillPlayFill size={40} /></button><img src={song.artwork} alt="" /></td>
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