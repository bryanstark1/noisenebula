import SongForm from './SongForm/SongForm';
import SongDetails from './SongDetails/SongDetails';
import * as SongModel from '../../models/song';
import { TfiClose } from 'react-icons/tfi';
import './Modal.css';

interface ModalProps {
  modalContent: any
  modalEditSong: () => void,
  onClose: () => void,
  fetchSongs: () => void,
  selectedSong: any,
  user: any,
}

export default function Modal({ modalContent, modalEditSong, onClose, fetchSongs, selectedSong, user }: ModalProps) {

  return (
    <div className="modalDiv">
      <div className="modal">
        <button onClick={onClose} className='close-button'><TfiClose /></button>
        {modalContent === 'SongDetails' &&
          <SongDetails
            selectedSong={selectedSong}
            fetchSongs={fetchSongs}
            onClose={onClose}
            modalEditSong={modalEditSong}
            user={user}
          />
        ||
          <SongForm
            fetchSongs={fetchSongs}
            onClose={onClose}
            selectedSong={selectedSong}
            modalContent={modalContent}
            user={user}
          />
        }
      </div>
    </div>
  );
};