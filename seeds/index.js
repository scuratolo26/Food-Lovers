const sequelize = require('../config/connection');
const seedMeals = require('./mealData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedMeals();

  process.exit(0);
};

seedAll();
