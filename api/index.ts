import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./db";
import postsRoutes from "./routes/postsRoutes";

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(cors({ origin: process.env.DOMAIN_URL }));
app.use(express.json());

app.use("/posts", postsRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
