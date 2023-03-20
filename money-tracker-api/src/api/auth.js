const { Router } = require("express");
const jwt = require("jsonwebtoken");
const UserModel = require("../model/user");

const SECRET = process.env.SECRET;

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;

    next();
  });
};

const router = new Router();

router.verifyToken = verifyToken;

router.post("/sign-up", (req, res) => {
  const { email, password } = req.body;

  UserModel.createUser(email, password).then((user) => {
    res.json(user);
  });
});

router.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.getUserByEmail(email);
  if (!user) {
    return res.json({ token: false });
  }

  if (!(await UserModel.comparePasswords(user, password))) {
    return res.json({ token: false });
  }

  const token = await jwt.sign(user.toObject(), SECRET);
  return res.json({ token });
});

router.get("/me", verifyToken, (req, res) => {
  res.json(req.user);
});

module.exports = router;
