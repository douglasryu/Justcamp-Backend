const express = require("express");
const { asyncHandler, campNotFoundError } = require("../utils");
const { Reservation } = require("../db/models");

const router = express.Router();

//Make a new reservation
router.post("/", asyncHandler(async (req, res, next) => {
    const { user_id, campsite_id, start_date, end_date, totalCost } = req.body;
    const newReservation = await Reservation.create({
        user_id,
        campsite_id,
        start_date,
        end_date,
        totalCost
    });

    res.status(201);
}));


//Retrieve all reservations for a user
router.get("/:userId", asyncHandler(async (req, res, next) => {
    const reservations = await Reservation.findAll({
        where: {
            user_id: req.params.userId,
        },
    });

    res.json({ reservations });
}));


module.exports = router;
