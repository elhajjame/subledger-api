// import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();
// beforeAll(async () => {
//   await mongoose.connect("mongodb://localhost:27017/subledger");
// });

// afterAll(async () => {
//   await mongoose.connection.close();
// });
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

import mongoose from "mongoose";

beforeAll(async () => {
  await mongoose.connect("mongodb://localhost:27017/subledger");
});

afterAll(async () => {
  await mongoose.connection.close();
});
