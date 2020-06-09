//REQUIRED PACKAGES
const { validationResult } = require("express-validator");


const asyncHandler = (handler) => (req, res, next) =>
    handler(req, res, next).catch(next);

const handleValidationErrors = (req, res, next) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        const errors = validationErrors.array().map(error => error.msg);
        const err = Error("Bad request.");
        err.errors = errors;
        err.status = 400;
        err.title = "Bad request.";
        return next(err);
    }
    next();
};

const campNotFoundError = (campName) => {
    const err = Error("Camp not found");
    err.errors = [`${campName} could not be found.`];
    err.title = "Camp not found.";
    err.status = 404;
    return err;
};


module.exports = { asyncHandler, handleValidationErrors, campNotFoundError };
