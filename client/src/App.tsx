import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Browse from './pages/Browse/Browse';
import { Song as SongModel } from './models/song';
import * as SongsApi from './utilities/songs-api';
import './App.css';

export default function App() {
  const [songs, setSongs] = useState<SongModel[]>([]);

  useEffect(() => {
    async function fetchSongs() {
      try {
        const songs = await SongsApi.fetchSongs();
        setSongs(songs);
      } catch (error) {
        console.log(error);
      };
    }
    fetchSongs();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/songs' element={<Browse songs={songs} />} />
      </Routes>
    </div>
  );
};