import { useState, useEffect } from 'react';
import * as SongModel from './models/song';
import * as SongsApi from './utilities/songs-api';
import Browse from './pages/Browse/Browse';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal'
import './App.css';

export default function App() {
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

  function openModal() {
    setShowModal(true);
  };

  function closeModal() {
    setShowModal(false);
  };

  function modalAddSong() {
    setModalContent('AddSong');
  };

  function modalSongDetails() {
    setModalContent('SongDetails');
  };

  function modalEditSong() {
    setModalContent('EditSong');
  };

  function clearSelectedSong() {
    setSelectedSong('')
  }

  return (
    <div className="App">
      <Header
          onOpen={openModal}
          modalAddSong={modalAddSong}
          browsePage={() => setShowPage('browse')}
          homePage={() => setShowPage('home')}
          clearSelectedSong={clearSelectedSong}
        />
      {showPage === 'browse' &&
        <Browse
          songs={songs}
          onOpen={openModal}
          modalSongDetails={modalSongDetails}
          setSelectedSong={setSelectedSong}
        />
      }
      {showModal &&
        <Modal
          onClose={closeModal}
          modalContent={modalContent}
          modalEditSong={modalEditSong}
          fetchSongs={fetchSongs}
          selectedSong={selectedSong}
        />
      }
      <Footer></Footer>
    </div>
  );
};