import { Song } from "../../../models/song";
import { deleteSong } from '../../../utilities/songs-service';
import './SongDetails.css';

interface SongDetailsProps {
  selectedSong: Song,
  fetchSongs: () => void,
  onClose: () => void,
  modalEditSong: () => void,
  user: any,
}


export default function SongDetails({ selectedSong, fetchSongs, onClose, modalEditSong, user }: SongDetailsProps) {
  async function removeSong(id: string) {
    await deleteSong(id);
    fetchSongs();
    onClose();
  };

  return (
    <div className='song-details'>
      <h2 className='song-title'>{selectedSong.title}</h2>
      <h3 className='song-artist'>{selectedSong.artist}</h3>
      <h3 className='song-album'>{selectedSong.album}</h3>
      {user && 
        <div className='button-container'>
          <button className='edit-button' onClick={() => modalEditSong()}>Edit Song</button>
          <button className='delete-button' onClick={() => removeSong(selectedSong._id)}>Delete Song</button>
        </div>
      }
    </div>
  );
};