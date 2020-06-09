'use strict';
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            unique: true,
            allowNull: false
        },
        hashedPassword: {
            type: DataTypes.STRING.BINARY,
            allowNull: false
        },
        zipcode: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {});
    User.associate = function (models) {
        // associations can be defined here
    };

    User.prototype.validatePassword = function (password) {
        return bcrypt.compareSync(password, this.hashedPassword.toString());
    };

    return User;
};
