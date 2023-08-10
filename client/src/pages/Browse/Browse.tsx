import { useState } from 'react';
import SongCard from '../../components/SongCard/SongCard';
import "./Browse.css";

interface BrowseProps {
  modalSongDetails: () => void,
  songs: any,
  onOpen: () => void,
  setSelectedSong: any,
  user: any
  fetchSongs: () => void,
};

export default function Browse({ songs, onOpen, modalSongDetails, setSelectedSong, user, fetchSongs }: BrowseProps) {
  const [sort, setSort] = useState('titleAscending');
  const titleDescending = [...songs].sort((a, b) =>
    a.title > b.title ? -1: 1,
  );

  const titleAscending = [...songs].sort((a, b) =>
    a.title > b.title ? 1: -1,
  );

  const songsList = songs.map((s: any) => {
    return <SongCard
      song={s}
      key={s._id}
      onOpen={onOpen}
      modalSongDetails={modalSongDetails}
      setSelectedSong={setSelectedSong}
      user={user}
      fetchSongs={fetchSongs}
    />
  });


  return (
    <main className='browse-page'>
      <h1>Browse All</h1>
      <table className='songs-list'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
          </tr>
        </thead>
        <tbody>
          {songsList}
        </tbody>
      </table>
    </main>
  )
};