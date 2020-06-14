//Required packages
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

//Routes
const usersRouter = require("./routes/users");
const campsRouter = require("./routes/camps");
const reservationsRouter = require("./routes/reservations");
const reviewsRouter = require("./routes/reviews");

//Use utils
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//Use routes
app.use("/users", usersRouter);
app.use("/camps", campsRouter);
app.use("/reservations", reservationsRouter);
app.use("/reviews", reviewsRouter);

// ERROR HANDLERS - Catch unhandled requests and throw 404 error
app.use((req, res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.status = 404;
    next(err);
});

//ERROR HANDLERS - Custome error handler

// ERROR HANDLERS - Generic error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    const isProduction = process.env.NODE_ENV === "production";
    res.json({
        title: err.title || "Server Error",
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack,
    });
});

module.exports = app;
