const express = require("express");
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const { asyncHandler, handleValidationErrors } = require("../utils");
const { getUserToken, requireAuth } = require("../auth");
const { User, Reservation, Review } = require("../db/models");

const router = express.Router();

const validateName = [
    check("firstName")
        .exists({ checkFalsy: true })
        .withMessage("Please provide your first name"),
    check("lastName")
        .exists({ checkFalsy: true })
        .withMessage("Please provide your last name"),
    handleValidationErrors,
];

const validateEmailAndPassword = [
    check("email")
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage("Please provide a valid email."),
    check("password")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a password.")
        .isLength({ max: 50 })
        .withMessage('Password must not be more than 50 characters long'),
    handleValidationErrors,
];

const guestUserToDefault = async (user) => {
    //reset reservations for guest
    const clearReservations = await Reservation.destroy({ where: { user_id: 1 } });
    const defaultReservations1 = await Reservation.create({ user_id: 1, campsite_id: 4, start_date: new Date("2019-12-05"), end_date: new Date("2019-12-07"), totalCost: 64 });
    const defaultReservations2 = await Reservation.create({ user_id: 1, campsite_id: 3, start_date: new Date("2020-01-15"), end_date: new Date("2020-01-17"), totalCost: 280 });
    const defaultReservations3 = await Reservation.create({ user_id: 1, campsite_id: 5, start_date: new Date("2020-03-20"), end_date: new Date("2020-03-23"), totalCost: 282 });
    const defaultReservations4 = await Reservation.create({ user_id: 1, campsite_id: 6, start_date: new Date("2020-06-02"), end_date: new Date("2020-06-04"), totalCost: 80 });
    //reset reviews for guest
    const clearReviews = await Review.destroy({ where: { user_id: 1 } });
    const defaultReview1 = await Review.create({ user_id: 1, campsite_id: 4, title: "Beautiful place, calming", body: "This place was absolutely amazing. Will be visiting again soon." });
    const defaultReview2 = await Review.create({ user_id: 1, campsite_id: 3, title: "Very cute and welcoming", body: "This place was so cute. Many things to do nearby. Will be visiting again soon." });
    const defaultReview3 = await Review.create({ user_id: 1, campsite_id: 5, title: "Secluded and wildlife", body: "Amazing place where you can enjoy the nature" });
};

//Create new user
router.post("/", validateName, validateEmailAndPassword, asyncHandler(async (req, res, next) => {
    const { firstName, lastName, email, password, zipcode } = req.body;  //
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ firstName, lastName, email, hashedPassword, zipcode });

    const token = getUserToken(user);
    res.status(201).json({ token, user: user.id, firstName: user.firstName, lastName: user.lastName });
}
));

//User log in
router.post("/session", validateEmailAndPassword, asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({
        where: { email },
    });

    if (!user || !user.validatePassword(password)) {
        const err = new Error("Login failed");
        err.status = 401;
        err.title = "Login failed";
        err.errors = ["The provided credentials were invalid."];
        return next(err);
    }
    if (user.id = 1) {
        guestUserToDefault();
    }

    const token = getUserToken(user);
    res.json({ token, user: user.id, firstName: user.firstName, lastName: user.lastName });
})
);

module.exports = router;
