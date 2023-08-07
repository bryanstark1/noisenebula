import SongCard from '../../components/SongCard/SongCard';
import Modal from '../../components/Modal/Modal';
import "./Browse.css";

interface BrowseProps {
  songs: any,
  onOpen: () => void,
};

export default function Browse({ songs, onOpen}: BrowseProps) {
  const songsList = songs.map((s: any) => {
    return <SongCard song={s} key={s._id} onOpen={onOpen}/>
  });

  return (
    <main className='browse-page'>
      <h1>Browse</h1>
      <div>
        <div className='songs-list'>{songsList}</div>
      </div>
    </main>
  )
};