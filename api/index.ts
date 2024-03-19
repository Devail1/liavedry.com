import "dotenv/config";
import express from "express";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ name: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
