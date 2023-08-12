import React, { useState } from "react";
import * as SongModel from "../../../models/song";
import { updateSong, addSong } from '../../../utilities/songs-service'
import './SongForm.css';

interface AddSongFormProps {
  fetchSongs: () => void,
  onClose: () => void,
  selectedSong: SongModel.Song,
  modalContent: string,
  user: any,
};

export default function AddSongForm({ fetchSongs, onClose, selectedSong, modalContent, user }: AddSongFormProps) {
  const [newSong, setNewSong] = useState({
    title: selectedSong.title || '',
    artist: selectedSong.artist || '',
    album: selectedSong.album || '',
    audioFile: selectedSong.audioFile || '',
    artwork: selectedSong.artwork || '',
    // createdBy: user._id || '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newSongData = { ...newSong, [e.target.name]: e.target.value };
    setNewSong(newSongData);
  };

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newSongData = { ...newSong, [e.target.name]: e.currentTarget.files };
    setNewSong(newSongData);
    console.log(newSongData);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (modalContent === 'EditSong') {
      await updateSong(selectedSong._id, newSong);
    } else {
      const formData = new FormData();
      formData.append("title", newSong.title)
      formData.append("artist", newSong.artist)
      formData.append("album", newSong.album)
      formData.append("audioFile", newSong.audioFile[0])
      formData.append("artwork", newSong.artwork[0])
      await addSong(formData);
    };
    setNewSong({
      title: '',
      artist: '',
      album: '',
      audioFile: '',
      artwork: '',
      // createdBy: '',
    });
    fetchSongs();
    onClose();
  };


  return (
    <div className='form-container'>
      <h2>{(modalContent === 'EditSong') && "Edit Song"}{(modalContent === 'AddSong') && 'Add New Song'}</h2>
      <form onSubmit={handleSubmit}>
        <div className='grid-container'>
          <label htmlFor='title'>Title</label>
          <input type="text" name='title' placeholder='Title' onChange={handleChange} defaultValue={selectedSong?.title} />
          <label htmlFor='artist'>Artist</label>
          <input type="text" name='artist' placeholder='Artist' onChange={handleChange} defaultValue={selectedSong?.artist} />
          <label htmlFor='album'>Album</label>
          <input type="text" name='album' placeholder='Album' onChange={handleChange} defaultValue={selectedSong?.album} />
          {(modalContent === 'AddSong') && 
            <>
              <label htmlFor="audioFile" className='file-upload-label'>Upload Audio</label>
              <input className='file-upload-input' type="file" name='audioFile' accept="audio/*" onChange={handleFileChange}/>
              <label htmlFor="artwork" className='file-upload'>Album Artwork</label>
              <input type="file" name='artwork' accept="image/*" onChange={handleFileChange}/>
            </>
          }
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};