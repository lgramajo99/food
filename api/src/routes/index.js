const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipeByIdController = require('../controllers/recipe.controller.js');
const recipeByNameController = require('../controllers/recipe.controller.js');
const { createRecipe } = require('../handlers/recipePost.handler.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post('/recipes', createRecipe);

router.get('/recipes/name', recipeByNameController.getRecipeByName);
router.get('/recipes/:idRecipe', recipeByIdController.getRecipeDetail);

module.exports = router;
