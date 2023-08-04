import * as SongModel from '../models/song';

async function fetchData(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);
  if (response.ok) {
    return response;
  } else {
    const errorBody = await response.json();
    const errorMessage = errorBody.error;
    throw Error(errorMessage);
  }
}


export async function fetchSongs(): Promise<SongModel.Song[]> {
  const response = await fetchData('http://localhost:4000/songs', { method: "GET" });
  return response.json();
}


export async function addSong(song: SongModel.SongProps): Promise<SongModel.Song> {
  const response = await fetchData('/songs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(song)
  });
  return response.json();
}