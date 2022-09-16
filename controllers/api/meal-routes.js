const router = require('express').Router();
const { Recipe, Meal } = require('../../models');

// Get all meals
router.get('/', (req, res) => {
    Meal.findAll({
        include: [
            {
                model: Recipe,
                attributes: ['id', 'title', 'recipe']
            }
        ]
    })
        .then(dbMealData => res.json(dbMealData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// Get meal by id (Breakfast: 1, Lunch:2, Dinner:3)
router.get('/:id', (req, res) => {
    Meal.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Recipe,
                attributes: ['id', 'title', 'recipe']
            }
        ]
    })
        .then(dbMealData => res.json(dbMealData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

module.exports = router;