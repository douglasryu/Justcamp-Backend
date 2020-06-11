'use strict';
module.exports = (sequelize, DataTypes) => {
    const Campsite = sequelize.define('Campsite', {
        campName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        campSummary: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        campDescription: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        host: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        latitude: {
            type: DataTypes.NUMERIC(8, 6),
            allowNull: false
        },
        longitude: {
            type: DataTypes.NUMERIC(10, 6),
            allowNull: false
        },
        campType: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        numSites: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        maxCapacity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        campfire: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        toilet: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        pet: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        water: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        shower: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        picnic: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        kitchen: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        trash: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        wifi: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        biking: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        climbing: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        fishing: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        hiking: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        offRoading: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        swimming: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        wildlife: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {});
    Campsite.associate = function (models) {
        // associations can be defined here
    };
    return Campsite;
};
