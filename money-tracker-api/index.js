require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./src/app");

const PORT = process.env.PORT ?? 8000;
const { MONGO_URL } = process.env;

mongoose.connect(MONGO_URL).then(() => {
  app.listen(PORT, (req, res) => {
    console.log(`App listen in: ${PORT}`);
  });
});
