import express from "express";
import { isPrime } from "./is-prime";

const server = express();

server.use(express.json());

server.get("/prime", (req, res) => {
  const number = parseInt(req.query.number as string, 10);

  res.json(isPrime(number));
});

server.listen(8080); //the server object listens on port 8080
