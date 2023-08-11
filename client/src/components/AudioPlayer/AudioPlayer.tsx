import './AudioPlayer.css';

interface AudioPlayerProps {
  nowPlaying: string,
}

export default function AudioPlayer({ nowPlaying }: AudioPlayerProps) {
  return (
    <audio controls autoPlay src={nowPlaying} controlsList="nofullscreen nodownload noremoteplayback noplaybackrate"></audio>
  );
};