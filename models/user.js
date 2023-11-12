import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      match: emailRegexp,
      required: true,
    },
    password: {
      type: String,
      minlenght: 6,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const User = mongoose.model("user", userSchema);