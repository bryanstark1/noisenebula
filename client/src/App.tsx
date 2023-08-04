import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import * as songsAPI from "./utilities/songs-api";
import { Song } from './models/song';
import './App.css';

export default function App() {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    async function fetchSongs() {
      try {
        const response = await fetch('http://localhost:4000/songs', { method: "GET" });
        const songs = await response.json();
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
      <div>
        {songs && songs.length ? (
          <h2>{JSON.stringify(songs)}</h2>
        ) : (
          <h2>No songs yet!</h2>
        )}
      </div>
    </div>
  );
};