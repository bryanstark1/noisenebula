import { MdLibraryMusic } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { HiLibrary } from 'react-icons/hi';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import './Footer.css';

interface FooterProps {
  homePage: () => void,
  browsePage: () => void,
  libraryPage: () =>void,
  profilePage: () => void,
  user: any
  nowPlaying: string
  showPage: string
}

export default function Footer({homePage, browsePage, libraryPage, profilePage, user, nowPlaying, showPage}: FooterProps) {
  return (
    <footer>
      <AudioPlayer nowPlaying={nowPlaying}/>
      <div className='page-icon-container'>
        <button onClick={homePage} className={showPage == 'home' ? 'highlight' : '' }>
          <AiFillHome size={88}/>
        </button>
        <button onClick={browsePage} className={showPage == 'browse' ? 'highlight' : '' }>
          <MdLibraryMusic size={88}/>
        </button>
        {user &&
          <button onClick={libraryPage} className={showPage == 'library' ? 'highlight' : '' }>
            <HiLibrary size={88}/>
          </button>
          ||
          <button onClick={profilePage} className={showPage == 'page' ? 'highlight' : '' }>
            <HiLibrary size={88}/>
          </button>
        }
        <button onClick={profilePage} className={showPage == 'profile' ? 'highlight' : '' }>
          <FaUser size={88}/>
        </button>
      </div>
    </footer>
  );
};