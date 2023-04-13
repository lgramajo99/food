const apiRecipe = {
    id: response.data.id,
    nombre: response.data.title,
    imagen: response.data.image,
    resumenDelPlato: response.data.summary,
    nivelComidaSaludable: response.data.healthScore,
    pasoAPaso: response.data.instructions
};

module.exports = apiRecipe;