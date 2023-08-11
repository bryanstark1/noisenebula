import { BsFillPlayFill } from "react-icons/bs";
import { updateSong } from "../../utilities/songs-service";
import './PlayButton.css';

interface PlayButtonProps {
  song: any,
  setNowPlaying: (value: string | null) => void,
};


export default function PlayButton({ song, setNowPlaying }: PlayButtonProps) {
  async function onPlay(changeValue: number) {
    setNowPlaying(song.audioFile);
    const updatedSongData = {
      _id: song._id,
      title: song.title,
      artist: song.artitle,
      album: song.album,
      audioFile: song.audioFile,
      artwork: song.artwork,
      playCount: song.playCount+changeValue
    }
    await updateSong(song._id, updatedSongData);
  };

  return (
    <button className='play-button' onClick={() => onPlay(1)}><BsFillPlayFill size={40} /></button>
  );
};