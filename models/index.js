const User = require('./User');
const Recipe = require('./Recipe');
const Meal = require('./Meal');

User.hasMany(Recipe, {
  foreignKey: 'user_id'
});

Recipe.belongsTo(User, {
  foreignKey: 'user_id'
});

Meal.hasMany(Recipe, {
  foreignKey: 'meal_id'
});

Recipe.belongsTo(Meal, {
  foreignKey: 'meal_id'
});

module.exports = { User, Recipe, Meal };
