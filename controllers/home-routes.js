const router = require('express').Router();
const sequelize = require("../config/connection");
const { Meal, Recipe, User } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
  console.log('======================');
  Recipe.findAll({
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

      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// can use get single post for future development 
// get single post
// router.get('/recipe/:id', (req, res) => {
//   Recipe.findOne({
//     where: {
//       id: req.params.id
//     },
//     attributes: [
//       'id',
//       'title',
//       'recipe'
//     ],
//     include: [
//       {
//         model: Meal,
//         attributes: [
//           'id',
//           'meal_name',
//         ],
//       },
//       {
//         model: User,
//         attributes: [
//           'username'
//         ]
//       }
//     ]
//   })
//     .then(dbRecipeData => {
//       if (!dbRecipeData) {
//         res.status(404).json({ message: 'No recipe found with this id' });
//         return;
//       }

//       const post = dbRecipeData.get({ plain: true });

//       res.render('single-recipe', {
//         post,
//         loggedIn: req.session.loggedIn
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


module.exports = router;
