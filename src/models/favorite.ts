import { InferSchemaType, model, Schema } from "mongoose";

const favoriteSchema: Schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    songId: {
      type: Schema.Types.ObjectId,
      ref: 'Song'
    },
  }
);

type Favorite = InferSchemaType<typeof favoriteSchema>;

export default model<Favorite>("Favorite", favoriteSchema);