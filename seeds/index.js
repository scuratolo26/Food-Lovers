const sequelize = require('../config/connection');
const seedMeals = require('./mealData');
const seedRecipes = require('./recipeData');
const seedUsers = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedMeals();

  await seedRecipes();

  process.exit(0);
};

seedAll();
