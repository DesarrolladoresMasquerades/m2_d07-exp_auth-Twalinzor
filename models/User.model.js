const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [true, "Username is required."],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      // this match will disqualify all the emails with accidental empty spaces, missing dots in front of (.)com and the ones with no domain at all
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: {
      type: String,
      required: [true, "Password is required."],
    },
    imgUrl: {
      type: String,
      default:
        "https://img.favpng.com/17/23/14/computer-icons-reddit-image-portable-network-graphics-pepe-the-frog-png-favpng-y5Ptzq3Ac2vczG7YL5x13Tz5N.jpg",
    },
  },

  {
    timestamps: true,
  }
);

module.exports = model("User", userSchema);
