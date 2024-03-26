import express from "express";
import cors from "cors";
import auth from "./routes/auth";
import connectDB from "./db/index";

const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const mongo_uri = process.env.MONGO_URI;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

connectDB(mongo_uri);

app.get("/api/auth", auth);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
