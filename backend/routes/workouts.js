const express = require("express");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
} = require("../controllers/workoutController");
const router = express.Router();

router.get("/", getWorkouts);
router.get("/:id", getWorkout);
router.post("/", createWorkout);
router.delete("/:id", (req, res) => {
  res.json({ msg: "delete one Workouts" });
});
router.patch("/:id", (req, res) => {
  res.json({ msg: "update one Workouts" });
});
module.exports = router;
