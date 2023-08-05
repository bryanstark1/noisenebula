import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Song as SongModel } from './models/song';
import * as SongsApi from './utilities/songs-api';
import Browse from './pages/Browse/Browse';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal'

export default function App() {
  const [songs, setSongs] = useState<SongModel[]>([]);
  const [showModal, setShowModal] = useState(false);

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
      <Header onOpen={() => setShowModal(true)} />
      <Routes>
        <Route path='/songs' element={<Browse songs={songs} />} />
      </Routes>
      {showModal &&
        <Modal onClose={() => setShowModal(false)} fetchSongs={fetchSongs}/>
      }
    </div>
  );
};