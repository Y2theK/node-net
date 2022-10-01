const express = require("express");
const { createWorkout } = require("../controllers/workoutController");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "Get all Workouts" });
});
router.get("/:id", (req, res) => {
  res.json({ msg: "Get one Workouts" });
});
router.post("/", createWorkout);
router.delete("/:id", (req, res) => {
  res.json({ msg: "delete one Workouts" });
});
router.patch("/:id", (req, res) => {
  res.json({ msg: "update one Workouts" });
});
module.exports = router;
