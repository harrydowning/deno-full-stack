// @ts-types="npm:@types/express"
import express from "express";
import process from "node:process";

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello, World");
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
