"Use Strict";

const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const userProfileSchema = new Schema(
  {
    userEmail: {
      type: String,
      required: true,
      lowercase: true,
      match:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      trim: true,
      unique: true,
    },
    hash: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    salt: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    purchases: [
      {
        date: { type: String, trim: true, required: true },
        description: { type: String, trim: true, required: true },
        category: { type: String, required: true },
        amount: { type: Number, trim: true, required: true },
      },
    ],
  },
  { timestamps: true }
);

const userProfile = mongoose.model("userProfile", userProfileSchema);
module.exports = userProfile;
