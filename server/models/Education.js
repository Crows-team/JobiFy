const { Sequelize, DataTypes } = require("sequelize");
const db = require("../loaders/dataBase");

const Education = db.define(
  "Education",
  {
    // Model attributes are defined here
    startDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    establishment: {
      type: DataTypes.STRING,
      allowNull: false
    },
    diplomaMajor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    diplomaType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    // Other model options go here
  }
);

module.exports = Education;