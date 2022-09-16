const router = require('express').Router();
const { Recipe, Meal } = require('../../models');

router.get('/', (req, res) => {
    // find all categories
    // be sure to include its associated Products
    Meal.findAll({
        include: [
            {
                model: Recipe,
                attributes: ['id', 'title', 'recipe', 'meal_id']
            }
        ]
    })
        .then(dbMealData => res.json(dbMealData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get('/:id', (req, res) => {
    // find all categories
    // be sure to include its associated Products
    Meal.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Recipe,
                attributes: ['id', 'title', 'recipe', 'meal_id']
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