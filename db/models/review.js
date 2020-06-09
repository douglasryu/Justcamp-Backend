'use strict';
module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        campsite_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        body: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    }, {});
    Review.associate = function (models) {
        // associations can be defined here
    };
    return Review;
};
