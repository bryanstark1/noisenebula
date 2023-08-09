import { BsCloudPlus, BsCloudy } from 'react-icons/bs';
import './Header.css';

interface HeaderProps {
  onOpen: () => void,
  browsePage: () => void,
  homePage: () => void,
  modalAddSong: () => void,
  clearSelectedSong: () => void,
  user: any,
};

export default function Header({onOpen, browsePage, homePage, modalAddSong, clearSelectedSong, user}: HeaderProps) {

  function onClick() {
    onOpen();
    modalAddSong();
    clearSelectedSong();
  };

  return (
    <header>
      <button onClick={homePage} className="app-name">noise<span>Nebula</span></button>
      <nav>
        {/* <button onClick={browsePage}>Browse All</button> */}
        {user &&
          <button onClick={onClick}><BsCloudPlus className='add-song' size={40}/></button>
          ||
          <BsCloudy className='cloud-logo' size={40}/>
        }
      </nav>
    </header>
  );
};