import { Link } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  onOpen: () => void,
  browsePage: () => void
  homePage: () => void
}

export default function Header({onOpen, browsePage, homePage}: HeaderProps) {
  return (
    <header>
      <button onClick={homePage}><h1 className="app-name">NoiseNebula</h1></button>
      <nav>
        <button onClick={browsePage}>Browse All</button>
        <button onClick={onOpen}>+</button>
      </nav>
    </header>
  );
};