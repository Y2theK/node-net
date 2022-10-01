const mongoose = require("mongoose");
const Workout = require("../models/workoutModel");

//get all workouts
const getWorkouts = async (req, res) => {
  const workout = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workout);
};

//get a workout
const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    //dont forget to return, bec there is no return it will continue below code and throw error
    return res.status(404).json({ error: "no such workout" });
  }
  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(404).json({ error: "no such workout" });
  }
  res.status(200).json(workout);
};

//create a workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//update a workout

//delete a workout
module.exports = {
  createWorkout,
  getWorkout,
  getWorkouts,
};
