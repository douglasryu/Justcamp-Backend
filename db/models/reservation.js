'use strict';
module.exports = (sequelize, DataTypes) => {
    const Reservation = sequelize.define('Reservation', {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        campsite_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        totalCost: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {});
    Reservation.associate = function (models) {
        // associations can be defined here
    };
    return Reservation;
};
