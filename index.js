const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");

const db_connect = require("./models/db");

const userRoute = require("./routers/userRoute");
const todoRoute = require("./routers/todoRoute");

const app = express();

dotenv.config();
db_connect();

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = process.env.PORT || 3500;

app.get("/", (req, res) => {
  res.send(
    `<center><h1 style='color:red'>Server is Running on ${PORT}</h1></center>`
  );
});

app.use("/", userRoute);
app.use("/", todoRoute);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
