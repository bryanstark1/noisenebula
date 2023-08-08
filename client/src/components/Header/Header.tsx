import { BsCloudPlus } from 'react-icons/bs';
import './Header.css';

interface HeaderProps {
  onOpen: () => void,
  browsePage: () => void,
  homePage: () => void,
  modalAddSong: () => void,
  clearSelectedSong: () => void,
}

export default function Header({onOpen, browsePage, homePage, modalAddSong, clearSelectedSong}: HeaderProps) {

  function onClick() {
    onOpen();
    modalAddSong();
    clearSelectedSong();
  };

  return (
    <header>
      <button onClick={homePage} className="app-name">noise<span>Nebula</span></button>
      <nav>
        <button onClick={browsePage}>Browse All</button>
        <button onClick={onClick}><BsCloudPlus className='add-song' size={34}/></button>
      </nav>
    </header>
  );
};