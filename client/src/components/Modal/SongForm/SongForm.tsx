import React, { useState } from "react";
import * as SongModel from "../../../models/song";
import { updateSong, addSong } from '../../../utilities/songs-service'
import './SongForm.css';

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
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newSongData = { ...newSong, [e.target.name]: e.target.value };
    setNewSong(newSongData);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (modalContent === 'EditSong') {
      await updateSong(selectedSong._id, newSong);
    } else {
      await addSong(newSong);
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
    <div className='form-container'>
      <h2>{(modalContent === 'EditSong') && "Edit Song"}{(modalContent === 'AddSong') && 'Add Song'}</h2>
      <form onSubmit={handleSubmit}>
        <div className='grid-container'>
          <label htmlFor='title'>Title</label>
          <input type="text" name='title' placeholder='Title' onChange={handleChange} defaultValue={selectedSong?.title} />
          <label htmlFor='artist'>Artist</label>
          <input type="text" name='artist' placeholder='Artist' onChange={handleChange} defaultValue={selectedSong?.artist} />
          <label htmlFor='album'>Album</label>
          <input type="text" name='album' placeholder='Album' onChange={handleChange} defaultValue={selectedSong?.album} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};