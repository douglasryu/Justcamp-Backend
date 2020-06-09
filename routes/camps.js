const express = require("express");
const { asyncHandler, campNotFoundError } = require("../utils");
const { requireAuth } = require("../auth");
const { Camp } = require("../db/models");

const router = express.Router();

//Get all camps

//Get camp details
router.get("/:campId", requireAuth, asyncHandler(async (req, res, next) => {
    const camp = await Camp.findOne({
        where: {
            campId = req.params.campId,
        },
        // include:
    });

    res.json({ camp });
}));
