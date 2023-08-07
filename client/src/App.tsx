import { useState, useEffect } from 'react';
import * as SongModel from './models/song';
import * as SongsApi from './utilities/songs-api';
import Browse from './pages/Browse/Browse';
import Header from './components/Header/Header';
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
    setModalContent('AddSongForm');
  };

  function modalSongDetails() {
    setModalContent('SongDetails');
  };

  // function modalEditSong() {
  //   setModalContent('EditSongForm');
  // };

  return (
    <div className="App">
      <Header
          onOpen={openModal}
          modalContent={modalAddSong}
          browsePage={() => setShowPage('browse')}
          homePage={() => setShowPage('home')}
        />
      {showPage === 'browse' &&
        <Browse
          songs={songs}
          onOpen={openModal}
          modalContent={modalSongDetails}
          setSelectedSong={setSelectedSong}
        />
      }
      {showModal &&
        <Modal
          onClose={closeModal}
          modalContent={modalContent}
          fetchSongs={fetchSongs}
          selectedSong={selectedSong}
        />
      }
    </div>
  );
};