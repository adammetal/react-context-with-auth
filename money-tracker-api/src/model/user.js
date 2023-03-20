const bcrypt = require("bcrypt");
const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: String,
  password: String,
  track: [
    {
      date: { type: Date, default: Date.now },
      amount: Number,
      rating: Number,
    },
  ],
});

const userModel = model("User", UserSchema);

const hash = (pw) => bcrypt.hash(pw, 10);

const comparePasswords = (user, pw) => bcrypt.compare(pw, user.password);

const getUserByEmail = (email) => userModel.findOne({ email }).exec();

const createUser = async (email, password) => {
  const hashed = await hash(password);

  const user = {
    password: hashed,
    track: [],
    email,
  };

  return userModel.create(user);
};

module.exports = {
  comparePasswords,
  getUserByEmail,
  createUser,
};
