import { MdLibraryMusic } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import './Footer.css';

interface FooterProps {
  browsePage: () => void,
  profilePage: () => void,
}

export default function Footer({browsePage, profilePage}: FooterProps) {
  return (
    <footer>
      <button onClick={browsePage}>
        <MdLibraryMusic size={70}/>
      </button>
      <button onClick={profilePage}>
        <FaUser size={70}/>
      </button>
    </footer>
  );
};