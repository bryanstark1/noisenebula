import { Document } from "mongoose";

export interface ISong extends Document {
  title: string
  artist: string
  album: string
  audioFile: string
  artwork: string
  playCount: number
}