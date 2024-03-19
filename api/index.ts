import "dotenv/config";
import express from "express";
// import cors from "cors";
import connectDB from "./db";
import postsRoutes from "./routes/postsRoutes";

const app = express();
const port = process.env.PORT || 5000;

connectDB();

// app.use(cors({ origin: process.env.DOMAIN_URL }));

app.use(express.json());

app.use("/posts", postsRoutes);

app.get("/api/hello", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
