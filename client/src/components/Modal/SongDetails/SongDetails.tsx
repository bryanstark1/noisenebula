import React, { useState, ChangeEvent, FormEvent } from "react";
import { useForm } from "react-hook-form";
import { Song } from "../../../models/song";
import * as SongsApi from '../../../utilities/songs-api';

interface SongDetailsProps {
  selectedSong: Song,
  fetchSongs: () => void,
  onClose: () => void,
}


export default function SongDetails({ selectedSong, fetchSongs, onClose }: SongDetailsProps) {
  async function removeSong(id: string) {
    await SongsApi.deleteSong(id);
    fetchSongs();
    onClose();
  };

  return (
    <div>
      <h4>Song Details</h4>
      <h2>{selectedSong.title}</h2>
      <h3>{selectedSong.artist}</h3>
      <h3>{selectedSong.album}</h3>
      <button onClick={() => removeSong(selectedSong._id)}>Delete Song</button>
    </div>
  );
};