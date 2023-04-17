const { Recipe, Diets } = require('../db');

exports.createRecipe = async (req, res) => {
    const { nombre, imagen, resumenDelPlato, nivelComidaSaludable, pasoAPaso, dietas } = req.body;

    try {
        // Verificar si se seleccionó al menos un tipo de dieta
        if (!dietas || dietas.length === 0) {
            return res.status(400).json({ message: "Se requiere al menos un tipo de dieta para crear una receta" });
        }

        // Crear la receta
        const recipe = await Recipe.create({
            nombre,
            imagen,
            resumenDelPlato,
            nivelComidaSaludable,
            pasoAPaso
        });

        // Buscar los tipos de dieta seleccionados y asociarlos con la receta
        const diets = [];
        for (const dieta of dietas) {
            const [result, created] = await Diets.findOrCreate({ where: { nombre: dieta } });
            diets.push(result);
        }
        await recipe.addDiets(diets);

        // Devolver la nueva receta creada
        res.status(200).json(recipe);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Hubo un error al crear la receta" });
    }
}
