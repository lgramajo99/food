const axios = require('axios');
const { Recipe } = require('../db');
require('dotenv').config();

exports.getRecipeById = async (idRecipe) => {

    const recipe = await Recipe.findByPk(idRecipe);

    if (!recipe) {
        // si no se encontró el registro, podrías retornar un error o un mensaje adecuado

        const response = await axios.get(`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${process.env.YOUR_API_KEY}&addRecipeInformation=true`);

        const apiRecipe = {
            id: response.data.id,
            nombre: response.data.title,
            imagen: response.data.image,
            resumenDelPlato: response.data.summary,
            nivelComidaSaludable: response.data.healthScore,
            pasoAPaso: response.data.instructions
        };

        return apiRecipe;
    }
};