import { Link } from 'react-router-dom';
import './Header.css';

interface ModalProps {
  onOpen: () => void,
}

export default function Header({onOpen}: ModalProps) {
  return (
    <header>
      <Link to=''><h1 className="app-name">NoiseNebula</h1></Link>
      <nav>
        <Link to='/songs'>Browse</Link>
        <button onClick={onOpen}>+</button>
      </nav>
    </header>
  );
};