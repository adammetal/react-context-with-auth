const crypto = require("crypto");
const bcrypt = require("bcrypt");

const users = [];

const genId = () => crypto.randomBytes(32).toString("hex");

const hash = (pw) => bcrypt.hash(pw, 10);

const comparePasswords = (user, pw) => bcrypt.compare(pw, user.password);

const getUserByEmail = (email) =>
  Promise.resolve(users.find((user) => user.email === email));

const createUser = (email, password) => {
  const id = genId();

  return hash(password).then((password) => {
    const user = {
      password,
      email,
      id,
    };

    users.push(user);
    return user;
  });
};

module.exports = {
  comparePasswords,
  getUserByEmail,
  createUser,
};
