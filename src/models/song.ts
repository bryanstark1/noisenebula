// import { ISong } from './../types/song';
import { InferSchemaType, model, Schema } from "mongoose";

const songSchema: Schema = new Schema(
  {
    title: {
    type: String,
    required: true,
  },
    artist: {
      type: String,
      required: true,
    },
    album: {
      type: String,
      required: false,
    },
    audioFile: {
      type: String,
      // required: true,
    },
    artwork: {
      type: String,
      required: false,
    },
    playCount: {
      type: Number,
      default: 0,
    }
  },
  { timestamps: true }
);

type Song = InferSchemaType<typeof songSchema>;

export default model<Song>("Song", songSchema);