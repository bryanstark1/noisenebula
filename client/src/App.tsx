import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Song as SongModel } from './models/song';
import * as SongsApi from './utilities/songs-api';
import Browse from './pages/Browse/Browse';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal'
import './App.css';

export default function App() {
  const [songs, setSongs] = useState<SongModel[]>([]);
  const [showPage, setShowPage] = useState('home');
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

  function openModal() {
    setShowModal(true);
  };

  function closeModal() {
    setShowModal(false);
  };

  return (
    <div className="App">
      <Header
        onOpen={() => setShowModal(true)}
        browsePage={() => setShowPage('browse')}
        homePage={() => setShowPage('home')} />
      {showPage === 'browse' &&
        <Browse songs={songs} onOpen={openModal} />
      }
      {showModal &&
        <Modal onClose={closeModal} fetchSongs={fetchSongs}/>
      }
    </div>
  );
};