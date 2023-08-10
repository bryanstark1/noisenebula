import * as songsAPI from './songs-api';

export async function getSongs() {
  const token = await songsAPI.getSongs();
  return token
}

export async function addSong(song: any){
  console.log(song)
  await songsAPI.addSong(song);
}

export async function deleteSong(songId: any){
  await songsAPI.deleteSong(songId);
}

export async function updateSong(songId: any, song: any){
  await songsAPI.updateSong(songId, song);
}

export async function getOneSong(songId: any){
  const token = await songsAPI.getOneSong(songId);
  return token
}