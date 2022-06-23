import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

// TypeScript Definition for userSchema
export interface UserDocument extends mongoose.Document {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

// Schema definition
const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
// Model
const UserModel = mongoose.model("User", userSchema);

export default UserModel;
