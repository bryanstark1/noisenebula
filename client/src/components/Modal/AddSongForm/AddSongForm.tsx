import React, { useState } from "react";
import * as SongModel from "../../../models/song";
import * as SongsApi from '../../../utilities/songs-api';

interface AddSongFormProps {
  fetchSongs: () => void,
  onClose: () => void,
  selectedSong: SongModel.Song,
  modalContent: string,
};

export default function AddSongForm({ fetchSongs, onClose, selectedSong, modalContent }: AddSongFormProps) {
  const [newSong, setNewSong] = useState({
    title: selectedSong?.title || '',
    artist: selectedSong?.artist || '',
    album: selectedSong?.album || '',
    // title: '',
    // artist: '',
    // album: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newSongData = { ...newSong, [e.target.name]: e.target.value };
    setNewSong(newSongData);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>, ) {
    e.preventDefault();
    if (modalContent === 'EditSong') {
      await SongsApi.updateSong(selectedSong._id, newSong);
    } else {
      await SongsApi.addSong(newSong);
    };
    setNewSong({
      title: '',
      artist: '',
      album: '',
    });
    fetchSongs();
    onClose();
  };


  return (
    <div className='modal-content-container'>
      <h2>{(modalContent === 'EditSong') && "Edit Song"}{modalContent === 'AddSong' && 'Add Song'}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title</label>
        <input type="text" name='title' placeholder='Title' onChange={handleChange} defaultValue={selectedSong?.title} />
        <label htmlFor='artist'>Artist</label>
        <input type="text" name='artist' placeholder='Artist' onChange={handleChange} defaultValue={selectedSong?.artist} />
        <label htmlFor='album'>Album</label>
        <input type="text" name='album' placeholder='Album' onChange={handleChange} defaultValue={selectedSong?.album} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};