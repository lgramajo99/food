const { getRecipeById } = require('../handlers/recipeById.handler.js');

exports.getRecipeDetail = async (req, res) => {
  try {
    const idRecipe = req.params.idRecipe;
    const apiRecipe = await getRecipeById(idRecipe);
    res.status(200).json(apiRecipe);
  } catch (error) {
    res.status(404).send(`La receta con el id: ${req.params.idRecipe}, no fue encontrada`);
  }
};