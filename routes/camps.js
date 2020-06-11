const express = require("express");
const { asyncHandler, campNotFoundError } = require("../utils");
const { requireAuth } = require("../auth");
const { Campsite } = require("../db/models");

const router = express.Router();

//Get all camps
router.get("/", asyncHandler(async (req, res, next) => {
    const campSites = await Campsite.findAll();

    res.json({ campSites });
}));


//Get camp details
router.get("/:campId", requireAuth, asyncHandler(async (req, res, next) => {
    const camp = await Campsite.findOne({
        where: {
            id: req.params.campId,
        },
    });

    res.json({ camp });
}));


module.exports = router;
