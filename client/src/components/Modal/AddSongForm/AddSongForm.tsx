import React, { useState, ChangeEvent, FormEvent } from "react";
import { useForm } from "react-hook-form";
import { Song } from "../../../models/song";
import * as SongsApi from '../../../utilities/songs-api';

interface AddSongFormProps {
  fetchSongs: () => void,
  onClose: () => void,
};

export default function AddSongForm({ fetchSongs, onClose }: AddSongFormProps) {
  const [newSong, setNewSong] = useState({
    title: '',
    artist: '',
    album: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newSongData = { ...newSong, [e.target.name]: e.target.value };
    setNewSong(newSongData);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await SongsApi.addSong(newSong);
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
      <h2>Add Song</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title</label>
        <input type="text" name='title' placeholder='Title' onChange={handleChange} />
        <label htmlFor='artist'>Artist</label>
        <input type="text" name='artist' placeholder='Artist' onChange={handleChange} />
        <label htmlFor='album'>Album</label>
        <input type="text" name='album' placeholder='Album' onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};