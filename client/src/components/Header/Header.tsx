import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <Link to=''><h1 className="app-name">NoiseNebula</h1></Link>
      <nav>
        <Link to='/songs'>Browse</Link>
      </nav>
    </header>
  );
};