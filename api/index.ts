import "dotenv/config";
import express, { Request } from "express";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use(express.static("client/out"));

app.get("/api/hello", (req: Request, res) => {
  res.json({ name: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
