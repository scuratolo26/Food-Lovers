const router = require('express').Router();

const userRoutes = require('./user-routes');
const recipeRoutes = require('./recipe-routes');
const mealRoutes = require('./meal-routes');

router.use('/users', userRoutes);
router.use('/recipe', recipeRoutes);
router.use('/meal', mealRoutes);

module.exports = router;
