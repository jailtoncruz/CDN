import express from 'express';
import cors from 'cors';

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", express.static(String(process.env.CDN_PATH)));

app.listen(3333);