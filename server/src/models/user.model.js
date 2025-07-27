const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    role: {
      type: String,
      enum: ["traveler", "agency", "admin"],
      required: true,
      default: "traveler",
    },
    isAgent: {
      type: String,
      enum: ["no", "pending", "yes"],
      default: "no",
    },
    profilePic: {
      type: String,
    },
    coverPic: String,
    bio: String,
    address: String,
    age: Number,
    birthDate: { type: Date },
    gender: { type: String },
    phone: Number,
  },
  { timeStamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
