import { BiDotsHorizontalRounded } from "react-icons/bi";
import './OptionsButton.css';

interface OptionsButtonProps {
  song: any,
  onOpen: () => void,
  modalSongDetails: () => void,
  setSelectedSong: (value: string) => void,
}

export default function OptionsButton({ song, onOpen, modalSongDetails, setSelectedSong }: OptionsButtonProps) {
  function openModal() {
    onOpen();
    modalSongDetails();
    setSelectedSong(song);
  };

  return (
    <button className='options-button' onClick={openModal}><BiDotsHorizontalRounded size={28} /></button>
  );
};