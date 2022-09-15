const { Meal } = require('../models');

const mealData = [
    {
        meal_name: 'Breakfast'
    },
    {
        meal_name: 'Lunch'
    },
    {
        meal_name: 'Dinner'
    }
];

const seedMeal = () => Meal.bulkCreate(mealData);

module.exports = seedMeal;
