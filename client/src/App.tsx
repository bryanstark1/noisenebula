import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import * as songsAPI from "./utilities/songs-api";
import './App.css';

export default function App() {
  const [songs, setSongs] = useState<ISong[]>([]);

  useEffect(() => {
    fetchSongs();
  });

  const fetchSongs = (): void => {
    songsAPI.getSongs()
    .then(({ data: { songs } }: ISong[] | any) => setSongs(songs))
    .catch((err: Error) => console.log(err));
  };

  return (
    <div className="App">
      <Header />
      <div>
        {songs && songs.length ? (
          <ul>songs</ul>
        ) : (
          <h2>No Songs Yet!</h2>
        )}
      </div>
    </div>
  );
};