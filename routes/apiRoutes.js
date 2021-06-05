const router = require("express").Router();
const Workout = require("../models/Workout.js")



//getLastWorkout
router.put("/api/workouts/:id", (req, res) => {




        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json(err);
        });

}



//addExercise
router.put("/api/workouts/:id", (req, res) => {


        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json(err);
        });

}


//createWorkout
router.put("/api/workouts/:id", (req, res) => {



        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json(err);
        });

}


//getWorkoutsInRange
router.put("/api/workouts/:id", (req, res) => {




        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json(err);
        });

}

