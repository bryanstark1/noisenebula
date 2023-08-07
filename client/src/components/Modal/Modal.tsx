import AddSongForm from './AddSongForm/AddSongForm';
import SongDetails from './SongDetails/SongDetails';
import { fetchSong } from '../../utilities/songs-api';
import * as SongModel from '../../models/song';
import './Modal.css';

interface ModalProps {
  modalContent: any
  onClose: () => void,
  fetchSongs: () => void,
  selectedSong: any,
}

export default function Modal({ modalContent, onClose, fetchSongs, selectedSong }: ModalProps) {

  return (
    <div className="modalDiv">
      <div className="modal">
        <button onClick={onClose} className='close-button'>X</button>
        {modalContent === 'AddSongForm' &&
          <AddSongForm fetchSongs={fetchSongs} onClose={onClose}/>
        }
        {modalContent === 'SongDetails' &&
          <SongDetails selectedSong={selectedSong} fetchSongs={fetchSongs} onClose={onClose}/>
        }
        {/* ADD COMPONENT DEPENDING ON ADDING, VIEWING OR EDITING SONG*/}
        {/* <button className='button' onClick={() => setShowForm(!showForm)}>{showForm ? 'Item Details' : 'Edit Item'}</button> */}
      </div>
    </div>
  );
};