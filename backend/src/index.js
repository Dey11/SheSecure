import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import auth from "./routes/auth.js";
import { accident } from "./routes/accident.js";
import { connectToMongoDB } from "./db/index.js";
import {admin} from "./routes/auth.js"

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
const mongo_uri = process.env.MONGO_URI;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

connectToMongoDB(mongo_uri);

// app.get("/api/auth", auth);
app.use("/api/accidents", accident);
app.use("/api/admin", admin);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
