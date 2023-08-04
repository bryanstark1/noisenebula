import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [songs, setSongs] = useState<ISong[]>([]);

  useEffect(() => {
    const getSongs = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/songs", { method: "GET" });
        const songs = await response.json();
      } catch (error) {
        console.error(error);
      };
    }
    getSongs();
  }, []);

  return (
    <div className="App">
      <header className="App-header">

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;