export interface User {
  _id: string,
  username: string,
  email: string,
  password: string,
  createdAt: string,
  updatedAt: string,
};

export interface SongProps {
  user: User,
};