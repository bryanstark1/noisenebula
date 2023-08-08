import { useState, useEffect } from 'react';
import * as SongModel from './models/song';
import * as SongsApi from './utilities/songs-api';
import { getUser } from './utilities/users-service';

import Home from './pages/Home/Home';
import Browse from './pages/Browse/Browse';
import Profile from './pages/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal'
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [songs, setSongs] = useState<SongModel.Song[]>([]);
  const [showPage, setShowPage] = useState('home');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [selectedSong, setSelectedSong] = useState('');

  async function fetchSongs() {
    try {
      const songs = await SongsApi.fetchSongs();
      setSongs(songs);
    } catch (error) {
      console.log(error);
    };
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div className="App">
      <Header
          onOpen={() => setShowModal(true)}
          modalAddSong={() => setModalContent('AddSong')}
          browsePage={() => setShowPage('browse')}
          homePage={() => setShowPage('home')}
          clearSelectedSong={() => setSelectedSong('')}
        />
      {showPage === 'home' &&
        <Home />
      }
      {showPage === 'browse' &&
        <Browse
          songs={songs}
          onOpen={() => setShowModal(true)}
          modalSongDetails={() => setModalContent('SongDetails')}
          setSelectedSong={setSelectedSong}
        />
      }
      {showPage === 'profile' &&
        <Profile
          user={user}
          setUser={setUser}
        />
      }
      {showModal &&
        <Modal
          onClose={() => setShowModal(false)}
          modalContent={modalContent}
          modalEditSong={() => setModalContent('EditSong')}
          fetchSongs={fetchSongs}
          selectedSong={selectedSong}
        />
      }
      <Footer
        homePage={() => setShowPage('home')}
        browsePage={() => setShowPage('browse')}
        profilePage={() => setShowPage('profile')}
      />
    </div>
  );
};