const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Recipe extends Model { }

Recipe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        recipe: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        meal_id: {
            type: DataTypes.INTEGER,
            refrences: {
                model: 'meal',
                key: 'id'
            },
            allowNull: true,
            onDelete: 'SET NULL'
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipe',
    }
);

module.exports = Recipe;