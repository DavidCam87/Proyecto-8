const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, trim: true, required: true, unique: true },
    email: { type: String, trim: true, required: true, unique: true },
    password: { type: String, trim: true, required: true },
    yearOfBirth: { type: Number, trim: true, required: false },
    rol: { type: String, required: true, enum: ["admin", "user"], default: "user" },//user o admin
    image: { type: String, trim: true, required: true }
  },
  {
    timestamps: true,
    collection: "users"
  }
);

userSchema.pre("save", function () {
  this.password = bcrypt.hashSync(this.password, 10);
});

const User = mongoose.model("users", userSchema, "users");
module.exports = User;