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
      <button onClick={homePage}><h1 className="app-name">NoiseNebula</h1></button>
      <nav>
        <button onClick={browsePage}>Browse All</button>
        <button onClick={onClick}>+</button>
      </nav>
    </header>
  );
};