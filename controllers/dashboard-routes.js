const router = require('express').Router();
const sequelize = require("../config/connection");
const { Meal, Recipe, User } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for homepage
router.get('/', withAuth, (req, res) => {
    console.log('======================');
    Recipe.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'title',
            'recipe'
        ],
        include: [
            {
                model: Meal,
                attributes: [
                    'id',
                    'meal_name',
                ],
            },
            {
                model: User,
                attributes: [
                    'username'
                ]
            }
        ]
    })
        .then(dbRecipeData => {
            const posts = dbRecipeData.map(post => post.get({ plain: true }));

            res.render('dashboard', {
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/edit/:id', withAuth, (req, res) => {
    Recipe.findByPk(req.params.id, {
        attributes: [
            'id',
            'title',
            'recipe'
        ],
        include: [
            {
                model: Meal,
                attributes: [
                    'id',
                    'meal_name',
                ],
            },
            {
                model: User,
                attributes: [
                    'username'
                ]
            }
        ]
    })
        .then(dbRecipeData => {
            if (dbRecipeData) {
                const post = dbRecipeData.get({ plain: true });

                res.render('edit-post', {
                    post,
                    loggedIn: true
                });
            } else {
                res.status(404).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;