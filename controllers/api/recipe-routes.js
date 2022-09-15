const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Recipe, User, Meal } = require('../../models');
// const withAuth = require('../../utils/auth');

router.post('/', (req, res) => {
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

router.get('/', (req, res) => {
    Recipe.findAll({
        // include: [
        //     {
        //         model: Meal,
        //         attributes: ['id', 'category_name']
        //     },
        //     {
        //         model: User,
        //         key: 'id'
        //     }
        // ]
    })
        .then(dbRecipeData => res.json(dbRecipeData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Recipe.findOne({
        where: {
            id: req.params.id
        }
        // ,
        // include: [
        //     {
        //         model: Meal,
        //         attributes: ['id', 'category_name']
        //     },
        //     {
        //         model: User,
        //         key: 'id'
        //     }
        // ]
    })
        .then(dbRecipeData => res.json(dbRecipeData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

module.exports = router;