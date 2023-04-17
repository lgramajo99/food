// const axios = require('axios');
// const { Diet } = require('../db');
// require('dotenv').config();

// exports.getAllDiets = async (req, res) => {
//     try {
//         // Buscamos las dietas en la base de datos
//         const diets = await Diet.findAll();

//         // Si hay dietas en la base de datos, las devolvemos
//         if (diets.length > 0) {
//             return res.json(diets);
//         }

//         // Si no hay dietas en la base de datos, las obtenemos de la API
//         const apiResponse = await axios.get(`https://api.spoonacular.com/food/products/categories?apiKey=${YOUR_API_KEY}`);
//         const dietsFromApi = apiResponse.data
//             .filter(category => category.startsWith('Diet'))
//             .map(category => ({ name: category.replace('Diet', '').trim() }));

//         // Guardamos las dietas obtenidas de la API en la base de datos
//         const createdDiets = await Diet.bulkCreate(dietsFromApi);

//         // Devolvemos las dietas guardadas en la base de datos
//         res.json(createdDiets);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send({ error: 'Hubo un error al obtener las dietas' });
//     }
// };
