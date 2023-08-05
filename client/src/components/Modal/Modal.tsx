import AddSongForm from './AddSongForm/AddSongForm';
import './Modal.css';

interface ModalProps {
  onClose: () => void,
  fetchSongs: () => void
}

export default function Modal({onClose, fetchSongs}: ModalProps) {

  return (
    <div className="modalDiv">
      <div className="modal">
        <button onClick={onClose} className='close-button'>X</button>
        <div className="modal-header">
          <h2>Add Song</h2>
        </div>
        <AddSongForm fetchSongs={fetchSongs} onClose={onClose}/>
        {/* ADD FORM COMPONENT DEPENDING ON ADDING OR EDITING SONG*/}
      {/* <button className='button' onClick={() => setShowForm(!showForm)}>{showForm ? 'Item Details' : 'Edit Item'}</button> */}
      </div>
    </div>
  );
};