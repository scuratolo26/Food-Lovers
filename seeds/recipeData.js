const { Recipe } = require('../models');

const recipeData = [
    {
        title: 'Pancakes',
        recipe: "INGREDIENTS: 1 cup all-purpose flour, 2 tablespoons sugar, 2 teaspoons baking powder, 1/2 teaspoon salt, 1 cup milk, 2 tablespoons unsalted butter, melted, 1 large egg, 1 tablespoon vegetable oil, assorted topings such as butter, maple sugar, honey. DIRECTIONS:  STEP 1: Preheat oven to 200 degrees; have a baking sheet or heatproof platter ready to keep cooked pancakes warm in the oven. In a small bowl, whisk together flour, sugar, baking powder, and salt; set aside. STEP 2: In a medium bowl, whisk together milk, butter (or oil), and egg. Add dry ingredients to milk mixture; whisk until just moistened (do not overmix; a few small lumps are fine). STEP 3: Heat a large skillet (nonstick or cast-iron) or griddle over medium. Fold a sheet of paper towel in half, and moisten with oil; carefully rub skillet with oiled paper towel. STEP 4: For each pancake, spoon 2 to 3 tablespoons of batter onto skillet, using the back of the spoon to spread batter into a round (you should be able to fit 2 to 3 in a large skillet). STEP 5: Cook until surface of pancakes have some bubbles and a few have burst, 1 to 2 minutes. Flip carefully with a thin spatula, and cook until browned on the underside, 1 to 2 minutes more. Transfer to a baking sheet or platter; cover loosely with aluminum foil, and keep warm in oven. Continue with more oil and remaining batter. (You'll have 12 to 15 pancakes.) Serve warm, with desired toppings.",
        meal_id: 1,
        user_id: 1
    },
    {
        title: 'Caprese Sandwich',
        recipe: 'INGREDIENTS: Sourdough Bread, Fresh Tomatoes, Fresh Mozzarella, Salt Pepper, Arugula, Basil, Balsamic Glaze. DIRECTIONS: STEP 1: Top one slice of bread with sliced tomatoes and mozzarella, fresh basil, and arugula. Drizzle with balsamic reduction. STEP 2: Place second slice of bread on top. STEP 3: Cook in a panini press or grill pan until golden and the cheese is gooey.',
        meal_id: 2,
        user_id: 2
    },
    {
        title: 'Pene Alla Vodka',
        recipe: 'INGREDIENTS: 3 tbsp. butter, 1 shallot, minced, 2 cloves garlic, minced, 1/2 c. tomato paste, 1/2 tsp. crushed red pepper flakes, 2 tbsp. vodka, Kosher salt, 1 lb. tubed pasta, such as penne or rigatoni, 1/2 c. heavy cream, 1/2 c. freshly grated Parmesan, plus more for serving DIRECTIONS: STEP 1: In a large skillet over medium heat, melt butter. Add shallot and garlic and cook, stirring frequently, until softened, 4 to 5 minutes. STEP 2: Add tomato paste and red pepper flakes and cook, stirring frequently, until paste has coated shallots and garlic and is beginning to darken, 5 minutes. STEP 3: Add vodka to pot and stir to incorporate, scraping up any browned bits from the bottom of the pot. Turn off heat. STEP 4: Bring a large pot of salted water to a boil and cook pasta until al dente. Reserve 2 cups of pasta water before draining. STEP 5: Return sauce to medium heat and add 1/4 cup of pasta water and heavy cream, stirring to combine. Add half the Parmesan and stir until melted. Turn off heat and stir in cooked pasta. Fold in remaining Parmesan, adding more pasta water (about a tablespoon at a time) if the sauce is looking dry. Season with salt if needed. Serve topped with more Parmesan and torn basil leaves.',
        meal_id: 3,
        user_id: 1
    }
];

const seedRecipe = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipe;