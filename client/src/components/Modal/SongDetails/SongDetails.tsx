import { Song } from "../../../models/song";
import * as SongsApi from '../../../utilities/songs-api';

interface SongDetailsProps {
  selectedSong: Song,
  fetchSongs: () => void,
  onClose: () => void,
  modalEditSong: () => void,
}


export default function SongDetails({ selectedSong, fetchSongs, onClose, modalEditSong }: SongDetailsProps) {
  async function removeSong(id: string) {
    await SongsApi.deleteSong(id);
    fetchSongs();
    onClose();
  };

  return (
    <div>
      <h2>{selectedSong.title}</h2>
      <h3>{selectedSong.artist}</h3>
      <h3>{selectedSong.album}</h3>
      <button onClick={() => modalEditSong()}>Edit Song</button>
      <button onClick={() => removeSong(selectedSong._id)}>Delete Song</button>
    </div>
  );
};