interface FavoriteButtonProps {
  user: any,
  song: any,
}

export default function FavoriteButton({ user, song }: FavoriteButtonProps) {

  return (
    <button>+</button>
  );
};