import './Modal.css';

interface ModalProps {
  onClose: () => void,
}

export default function Modal({onClose}: ModalProps) {

  return (
    <div className="modalDiv" onClick={onClose}>
      <div className="modal">
      <button onClick={onClose} className='close-button'>X</button>
        {/* ADD FORM COMPONENT DEPENDING ON ADDING OR EDITING */}
      {/* <button className='button' onClick={() => setShowForm(!showForm)}>{showForm ? 'Item Details' : 'Edit Item'}</button> */}
      </div>
    </div>
  );
};