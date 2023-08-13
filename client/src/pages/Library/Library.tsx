import { useState } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { RiHeartsFill } from 'react-icons/ri';
import { FaFolderPlus } from 'react-icons/fa';
import SongListItem from '../../components/SongListItem/SongListItem';
import "./Library.css";

interface LibraryProps {
  modalSongDetails: () => void,
  songs: any,
  onOpen: () => void,
  setSelectedSong: any,
  user: any
  fetchSongs: () => void,
  setNowPlaying: any,
};

export default function Library({ songs, onOpen, modalSongDetails, setSelectedSong, user, fetchSongs, setNowPlaying }: LibraryProps) {
  const [playlist, setPlaylist] = useState('');
  const favoritesList = songs.map((s: any) => {
    if (s.favorites.includes(user._id)) {
      return <SongListItem
        song={s}
        key={s._id}
        onOpen={onOpen}
        modalSongDetails={modalSongDetails}
        setSelectedSong={setSelectedSong}
        user={user}
        fetchSongs={fetchSongs}
        setNowPlaying={setNowPlaying}
      />;
    } else {
      return null;
    };
  });

  const addedList = songs.map((s: any) => {
    if (s.createdBy === user._id) {
      return <SongListItem
        song={s}
        key={s._id}
        onOpen={onOpen}
        modalSongDetails={modalSongDetails}
        setSelectedSong={setSelectedSong}
        user={user}
        fetchSongs={fetchSongs}
        setNowPlaying={setNowPlaying}
      />;
    } else {
      return null;
    };
  });

  return (
    <main className='library-page'>
      {playlist === '' && 
        <>
          <h1>Library</h1>
          <div className='playlist' onClick={() => setPlaylist('added')}><FaFolderPlus size={34} />Added By Me<IoChevronForward size={30}/></div>
          <div className='playlist' onClick={() => setPlaylist('favorites')}><RiHeartsFill size={34}/>Favorites<IoChevronForward size={30}/></div>
        </>
      }
      {playlist === 'added' && 
        <>
          <div className='playlist-header'>
            <button className='back-button' onClick={() => setPlaylist('')}><IoChevronBack size={34} /></button>
            <h1>Added By Me</h1>
          </div>
          {addedList}
        </>
      }
      {playlist === 'favorites' && 
        <>
        <div className='playlist-header'>
          <button className='back-button' onClick={() => setPlaylist('')}><IoChevronBack size={34}/></button>
          <h1>Favorites</h1>
        </div>
          {favoritesList}
        </>
      }
    </main>
  )
};