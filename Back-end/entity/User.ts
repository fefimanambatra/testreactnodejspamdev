import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "../interface/User";

// Create Schema
const UserSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.model<IUser>("User", UserSchema);
