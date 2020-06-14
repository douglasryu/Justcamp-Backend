const express = require("express");
const { asyncHandler } = require("../utils");
const { Review } = require("../db/models");

const router = express.Router();

//Make a new review
router.post("/", asyncHandler(async (req, res, next) => {
    const { user_id, campsite_id, title, body } = req.body;
    const newReview = await Review.create({
        user_id,
        campsite_id,
        title,
        body
    });

    res.status(201);
}));


//Retrieve all reviews for a user
router.get("/:userId", asyncHandler(async (req, res, next) => {
    const reviews = await Review.findAll({
        where: {
            user_id: req.params.userId,
        },
    });

    res.json({ reviews });
}));


module.exports = router;
