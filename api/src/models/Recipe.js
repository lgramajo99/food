const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resumenDelPlato: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    nivelComidaSaludable: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pasoAPaso: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  });
};
