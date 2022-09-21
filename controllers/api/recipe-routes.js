const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Recipe, User, Meal } = require('../../models');
const withAuth = require('../../utils/auth');

// Post new recipe
router.post('/', withAuth, (req, res) => {
    Recipe.create({
        title: req.body.title,
        recipe: req.body.recipe,
        meal_id: req.body.meal_id,
        user_id: req.body.user_id
    })
        .then(dbRecipeData => res.json(dbRecipeData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get all recipes
router.get('/', (req, res) => {
    Recipe.findAll({
        include: [
            {
                model: Meal,
                attributes: ['id', 'meal_name']
            }
        ]
    })
        .then(dbRecipeData => res.json(dbRecipeData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get recipe by id
router.get('/:id', (req, res) => {
    Recipe.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbRecipeData => res.json(dbRecipeData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// Edit recipe title, content, or meal
router.put('/:id', withAuth, (req, res) => {
    Recipe.update(
        {
            title: req.body.title,
            recipe: req.body.recipe,
            meal_id: req.body.meal_id
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbRecipeData => {
            if (!dbRecipeData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbRecipeData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// Delete recipe
router.delete('/:id', withAuth, (req, res) => {
    console.log('id', req.params.id);
    Recipe.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbRecipeData => {
            if (!dbRecipeData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbRecipeData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;