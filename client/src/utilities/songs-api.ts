import * as SongModel from '../models/song';

async function fetchData(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);
  if (response.ok) {
    return response;
  } else {
    const errorBody = await response.json();
    const errorMessage = errorBody.error;
    throw Error(errorMessage);
  };
};


export async function fetchSongs(): Promise<SongModel.Song[]> {
  const response = await fetchData('http://localhost:4000/songs', { method: "GET" });
  return response.json();
};

export interface SongInput {
  title: string,
  artist: string,
  album: string,
};

export async function addSong(song: SongInput): Promise<SongModel.Song> {
  const response = await fetchData('http://localhost:4000/songs/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(song)
  });
  return response.json();
};

export async function updateSong(songId: string, song: SongInput): Promise<SongModel.Song> {
  const response = await fetchData(`/songs/${songId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(song)
  });
  return response.json();
};

export async function deleteSong(songId: string) {
  await fetchData(`/songs/${songId}`, { method: "DELETE" });
};