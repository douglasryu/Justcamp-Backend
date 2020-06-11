'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Campsites', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            campName: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            campSummary: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            campDescription: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            host: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            location: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            latitude: {
                type: Sequelize.NUMERIC(8, 6),
                allowNull: false
            },
            longitude: {
                type: Sequelize.NUMERIC(10, 6),
                allowNull: false
            },
            campType: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            numSites: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            maxCapacity: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            campfire: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            toilet: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            pet: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            water: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            shower: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            picnic: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            kitchen: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            trash: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            wifi: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            biking: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            climbing: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            fishing: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            hiking: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            offRoading: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            swimming: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            wildlife: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Campsites');
    }
};
