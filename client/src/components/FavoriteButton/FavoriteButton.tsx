import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { updateSong } from '../../utilities/songs-service';
import './FavoriteButton.css';

interface FavoriteButtonProps {
  user: any,
  song: any,
  fetchSongs: () => void,
};

export default function FavoriteButton({ user, song, fetchSongs }: FavoriteButtonProps) {
  const favoritedSong = {
    _id: song.id,
    title: song.title,
    artist: song.artist,
    album: song.album,
    audioFile: song.audioFile,
    artwork: song.artwork,
    playCount: song.playCount,
    favorites: song.favorites,
  };
  
  const favorited = song.favorites.includes(user._id);
  const index = favoritedSong.favorites.indexOf(user._id);
  async function updateFavorite() {
    if (!favorited) {
      favoritedSong.favorites.push(user._id);
    } else {
      favoritedSong.favorites.splice(index, 1);
    };
    await updateSong(song._id, favoritedSong);
    fetchSongs();
  };

  return (
      <button onClick={updateFavorite} className='favorite-button'>
        {favorited && 
        <AiFillHeart size={28}/>
        ||
        <AiOutlineHeart size={28}/>
        }
      </button>
  );
};