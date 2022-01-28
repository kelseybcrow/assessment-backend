const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const compliments = [
  "Gee, you're a smart cookie!",
  "Cool shirt!",
  "Your Javascript skills are stellar.",
];

const fortunes = [
  "You will meet someone important soon.",
  "Your path will diverge from tradition dramatically.",
  "You will know the answer to your question soon.",
  "Your income will be as stable as your emotions are.",
  "Your purpose will be revealed when you are ready.",
];

const bestFood = ["Sushi", "Nachos", "Dim sum", "Pho"];

app.get("/api/compliment", (req, res) => {
  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});

app.get("/api/fortune", (req, res) => {
  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
});

////// back-end new GET request //////
app.get("/api/food", (req, res) => {
  res.status(200).send(bestFood);
});

////// back-end POST requests //////
app.post("/api/burritos", (req, res) => {
  bestFood.push("Burritos");
  res.status(200).send(bestFood);
});

app.post("/api/ramen", (req, res) => {
  bestFood.push("Ramen");
  res.status(200).send(bestFood);
});

app.listen(4000, () => console.log("Server running on 4000"));
