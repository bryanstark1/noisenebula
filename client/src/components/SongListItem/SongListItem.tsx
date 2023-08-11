import { updateSong } from "../../utilities/songs-service";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import PlayButton from "../PlayButton/PlayButton";
import OptionsButton from "../OptionsButton/OptionsButton";
import './SongListItem.css';

interface SongListItemProps {
  modalSongDetails: () => void,
  song: any,
  onOpen: () => void,
  setSelectedSong: any,
  user: any,
  fetchSongs: () => void,
  setNowPlaying: any,
};

export default function SongListItem({ song, onOpen, modalSongDetails, setSelectedSong, user, fetchSongs, setNowPlaying }: SongListItemProps) {
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
    <tr className='song-list-item'>
      <td className='song-artwork'><PlayButton song={song} setNowPlaying={setNowPlaying} /><img src={song.artwork} alt={song.album} /></td>
      <td className='song-title'>{song.title}</td>
      <td className='song-artist'>{song.artist}</td>
      <td className='song-album'>{song.album}</td>
      <td className='icon-container'>
      {user &&
        <FavoriteButton user={user} song={song} fetchSongs={fetchSongs} />
      }
        <OptionsButton song={song} onOpen={onOpen} modalSongDetails={modalSongDetails} setSelectedSong={setSelectedSong} />
        {/* <BiDotsHorizontalRounded size={28} onClick={openModal} className='options'/> */}
      </td>
    </tr>
  );
};