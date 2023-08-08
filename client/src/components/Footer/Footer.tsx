import { MdLibraryMusic } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import './Footer.css';

interface FooterProps {
  homePage: () => void,
  browsePage: () => void,
  profilePage: () => void,
}

export default function Footer({homePage, browsePage, profilePage}: FooterProps) {
  return (
    <footer>
      <button onClick={homePage}>
        <AiFillHome size={70}/>
      </button>
      <button onClick={browsePage}>
        <MdLibraryMusic size={70}/>
      </button>
      <button onClick={profilePage}>
        <FaUser size={70}/>
      </button>
    </footer>
  );
};