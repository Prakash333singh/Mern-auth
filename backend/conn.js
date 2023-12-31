const mongoose = require("mongoose");

const connectDb = async () => {
  const connection = await mongoose.connect(
    "mongodb://127.0.0.1:27017/mern-auth"
  );
  if (connection) {
    console.log("connected to database");
  }
};

module.exports = { connectDb };
