const router = require("express").Router();
const Workout = require("../models/workout.js");

// your routes here
//this route will "get"/ show the workouts the user has already done
//or are in progress
app.get("/api/workouts", (req, res) => {
  Workout.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});
//when a new workout is created, post will create it
app.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("err", err);
      res.json(err);
    });
});

app.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    //changed default and set validator to true. should only run on this path
    { new: true, runValidators: true }
  )
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("err", err);
      res.json(err);
    });
});
module.exports = router;
