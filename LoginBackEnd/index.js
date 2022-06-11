import express from "express";
import cors from "cors";
import "dotenv/config";
import bodyParser from "body-parser";
import { register } from "./src/api/register.js";
import { user } from "./src/api/user.js";

const app = express();
const jsonParser = bodyParser.json();

app.use(cors());

app.post("/api/register", jsonParser, register);
app.post("/api/user", jsonParser, register, user);

const port = process.env.PORT || 9090;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
