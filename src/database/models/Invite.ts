import { Schema, model, Document } from "mongoose";

export const DOCUMENT_NAME = "Invite";
export const COLLECTION_NAME = "invites";

export default interface Invite extends Document {
  teamCode: string;
  sentBy: string;
  sentTo: string;
  status: false;
}

const schema = new Schema({
  teamCode: {
    type: Schema.Types.String,
  },
  sentBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  sentTo: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  status: {
    type: Schema.Types.Boolean,
    default: false,
  },
});

export const InviteModel = model<Invite>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);
