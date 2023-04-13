const { getRecipeById } = require('../handlers/recipeById.handler.js');
const { searchRecipes } = require('../handlers/recipeByName.handler.js');

exports.getRecipeDetail = async (req, res) => {
  try {
    const idRecipe = req.params.idRecipe;
    const apiRecipe = await getRecipeById(idRecipe);
    res.status(200).json(apiRecipe);
  } catch (error) {
    res.status(404).send(`La receta con el id: ${req.params.idRecipe}, no fue encontrada`);
  }
};


exports.getRecipeByName = async (req, res) => {
  try {
    const name = req.query.name;
    const recipes = await searchRecipes(name);
    res.json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Hubo un error al buscar las recetas' });
  }
};