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

app.get("/api/compliment", (req, res) => {
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});

app.get("/api/fortune", (req, res) => {
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
});

const dogs = [];
let id = 1;

app.post("/api/dogs", (req, res) => {
  const { dogName, dogBreed } = req.body;

  let newDog = {
    id,
    dogName,
    dogBreed,
  };

  dogs.push(newDog);
  id++;

  res.status(200).send(dogs);
});

app.delete("/api/dogs/:dogId", (req, res) => {
  const dogId = +req.params.dogId;
  console.log(dogId);

  const targetInd = dogs.findIndex((dogObject) => {
    return dogObject.id === dogId;
  });

  const removed = dogs.splice(targetInd, 1);

  res.status(200).send([removed[0], dogs]);

  return dogObject.id === dogId;
});

app.put("/api/dogs/:dogId", (req, res) => {
  const { dogId } = req.params;
  const { currentDogName, currentDogBreed } = req.params;
  const { newDogName, newDogBreed } = req.body;
  console.log(dogId);

  const targetInd = dogs.findIndex((dogObject) => {
    +dogObject.id === dogId;
  });

  for (let i = 0; i < dogs.length; i++) {
    if (dogs[i].dogName === currentDogName) {
      user[i].dogName = newDogName;
      res.status(200).send("Dog name updated.");
      return;
    }
    if (dogs[i].dogBreed === currentDogBreed) {
      user[i].dogBreed = newDogBreed;
      res.status(200).send("Dog breed updated.");
      return;
    }
  }
});

// const bestFood = ["Sushi", "Nachos", "Dim sum", "Pho"];

// app.get("/api/food", (req, res) => {
//   res.status(200).send(bestFood);
// });

// app.post("/api/burritos", (req, res) => {
//   let burritoAddedAlready = false;
//   for (let i = 0; i < bestFood.length; i++) {
//     if (bestFood[i] === "Burritos") {
//       burritoAddedAlready = true;
//     }
//   }
//   if (burritoAddedAlready === false) {
//     bestFood.push("Burritos");
//   }
//   res.status(200).send(bestFood);
// });

// app.post("/api/ramen", (req, res) => {
//   let ramenAddedAlready = false;
//   for (let i = 0; i < bestFood.length; i++) {
//     if (bestFood[i] === "Ramen") {
//       ramenAddedAlready = true;
//     }
//   }
//   if (ramenAddedAlready === false) {
//     bestFood.push("Ramen");
//   }
//   res.status(200).send(bestFood);
// });

app.listen(4000, () => console.log("Server running on 4000"));
