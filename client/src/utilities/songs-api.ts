import * as SongModel from '../models/song';
import sendRequest from './send-request';
import { getToken } from './users-service';

const BASE_URL = 'http://localhost:4000/songs';

export async function getSongs(): Promise<SongModel.Song[]> {
  return sendRequest(BASE_URL);
};

export async function getOneSong(songId: string): Promise<SongModel.Song> {
  return sendRequest(`${BASE_URL}/${songId}`);
};

export async function addSong(formData: any): Promise<SongModel.Song> {
  const options: any = {};
  options.body = formData;
  const token = getToken();
  if (token) {
    // Need to add an Authorization header
    // Use the Logical OR Assignment operator
    options.headers ||= {};
    options.headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(`${BASE_URL}/add`, { method: 'POST', body: options.body, headers: options.headers });
  // if res.ok is false then something went wrong
  if (res.ok) return res.json();
  throw new Error('Bad Request');

  // return sendRequest(`${BASE_URL}/add`, 'POST', formData);
};

export async function updateSong(songId: string, song: any): Promise<SongModel.Song> {
  return sendRequest(`${BASE_URL}/${songId}`, 'PUT', song);
};

export async function deleteSong(songId: string) {
  await sendRequest(`${BASE_URL}/${songId}`, 'DELETE');
};