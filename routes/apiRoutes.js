const router = require("express").Router();
const Workout = require("../models/Workout.js")

//getLastWorkout
router.get("/api/workouts/:id", (req, res) => {




        .then(data => {
    res.json(data);
})
        .catch(err => {
            res.status(500).json(err);
        });

}


//addExercise
router.put("/api/workouts/:id", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration',
                },
            },
        },
    ])

        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json(err);
        });

});


//createWorkout
router.post("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id,
        { $push: { exercises: req.body } },
    )
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json(err);
        });

}

//getWorkoutsInRange
router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration',
                },
            },
        },
    ])
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
})
module.exports = router;