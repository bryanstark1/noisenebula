import { MdLibraryMusic } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { HiLibrary } from 'react-icons/hi';
import './Footer.css';

interface FooterProps {
  homePage: () => void,
  browsePage: () => void,
  libraryPage: () =>void,
  profilePage: () => void,
  user: any
  nowPlaying: string
}

export default function Footer({homePage, browsePage, libraryPage, profilePage, user, nowPlaying}: FooterProps) {
  return (
    <footer>
      <audio controls autoPlay src={nowPlaying}>
        {/* {nowPlaying && 
          <source src={nowPlaying} type='audio/mpeg'/>
        } */}
      </audio>
      <div className='page-icon-container'>
        <button onClick={homePage}>
          <AiFillHome size={70}/>
        </button>
        <button onClick={browsePage}>
          <MdLibraryMusic size={70}/>
        </button>
        {user &&
          <button onClick={libraryPage}>
            <HiLibrary size={70}/>
          </button>
          ||
          <button onClick={profilePage}>
            <HiLibrary size={70}/>
          </button>
        }
        <button onClick={profilePage}>
          <FaUser size={70}/>
        </button>
      </div>
    </footer>
  );
};