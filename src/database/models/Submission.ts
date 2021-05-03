import { Schema, model, Document } from "mongoose";
import Team from "./Team";

export const DOCUMENT_NAME = "Submission";
export const COLLECTION_NAME = "submissions";

export default interface Submission extends Document {
  type: string;
  team: Team;
  title: string;
  description: string;
  tracks: [];
  videoLink: string;
  images: [];
}

const schema = new Schema({
  submissionID: Schema.Types.String,
  team: {
    type: Schema.Types.ObjectId,
    ref: "Team",
  },
  name: {
    type: Schema.Types.String,
    default: true,
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  invited: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  problemStatement: Schema.Types.String,
  tries: Schema.Types.Number,
});

export const submsissionModel = model<Submission>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);
