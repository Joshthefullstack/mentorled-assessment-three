const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const pool = require("./config/dbConfig");
// const setupDb = require("./setupDb.js");

const app = express();
dotenv.config();


pool.connect((err, client, done) => {
  if (err) console.error(err);
  else console.log("Connected to database");
  done();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));