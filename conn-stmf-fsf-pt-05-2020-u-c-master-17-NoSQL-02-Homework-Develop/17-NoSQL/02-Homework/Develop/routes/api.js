const router = require("express").Router();
const Workout = require("../models/workout.js");

// your routes here
app.get("/api/workouts", (req, res) => {
  Workout.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
