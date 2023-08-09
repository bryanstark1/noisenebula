import * as SongModel from '../models/song';
import sendRequest from './send-request';

const BASE_URL = 'http://localhost:4000/songs';

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

export async function getSongs(): Promise<SongModel.Song[]> {
  return sendRequest(BASE_URL);
};

export async function getOneSong(songId: string): Promise<SongModel.Song> {
  return sendRequest(`${BASE_URL}/${songId}`);
};

export interface SongInput {
  title: string,
  artist: string,
  album: string,
};

export async function addSong(formData: any): Promise<SongModel.Song> {
  return sendRequest(`${BASE_URL}/add`, 'POST', formData);
};

export async function updateSong(songId: string, song: any): Promise<SongModel.Song> {
  return sendRequest(`${BASE_URL}/${songId}`, 'PUT', song);
};

export async function deleteSong(songId: string) {
  await sendRequest(`${BASE_URL}/${songId}`, 'DELETE');
};