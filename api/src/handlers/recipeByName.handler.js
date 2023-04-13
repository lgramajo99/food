const { Op } = require('sequelize');
const axios = require('axios');
const { Recipe } = require('../db');

exports.searchRecipes = async (name) => {
    const searchQuery = {
        where: {
            nombre: { [Op.iLike]: `%${name}%` }
        }
    };

    try {
        const dbRecipes = await Recipe.findAll(searchQuery);
        const apiRecipesResponse = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.YOUR_API_KEY}&query=${name}&addRecipeInformation=true`);

        const apiRecipes = apiRecipesResponse.data.results.map(result => ({
            id: result.id,
            nombre: result.title,
            imagen: result.image,
            resumenDelPlato: result.summary,
            nivelComidaSaludable: result.healthScore,
            pasoAPaso: result.analyzedInstructions.flatMap(instruction => instruction.steps.map(step => ({
                numero: step.number,
                descripcion: step.step
            })))
        }));

        const allRecipes = [...dbRecipes, ...apiRecipes];
        if (allRecipes.length === 0) {
            throw new Error(`No se encontraron recetas con el nombre ${name}`);
        }

        return allRecipes;
    } catch (error) {
        console.error(error);
        throw new Error('Hubo un error al buscar las recetas');
    }
};
