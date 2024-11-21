const mongoose = require("mongoose");

const connect_DB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect_DB;
