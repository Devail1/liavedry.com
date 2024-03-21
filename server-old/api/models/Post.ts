import { model, Schema, Document } from "mongoose";

export interface IPost extends Document {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Post = model<IPost>("Post", PostSchema);
