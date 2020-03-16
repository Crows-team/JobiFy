const { DataTypes } = require("sequelize");
const db = require("../loaders/dataBase");

//user has one resume

const JobOffer = db.define("JobOffer", {
  jobPosition: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "Job position"
  },
  jobDescription: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "Job description "
  },
  jobMinSalary: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  jobMaxSalary: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  jobExpirationDate: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = JobOffer;