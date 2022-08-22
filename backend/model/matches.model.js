const { DataTypes } = require("sequelize");
const dbConnection = require("../db");
const matches = dbConnection.define("matches", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  season: {
    type: DataTypes.INTEGER,
  },
  city: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.STRING,
  },
  team1: {
    type: DataTypes.STRING,
  },
  team2: {
    type: DataTypes.STRING,
  },
  toss_winner: {
    type: DataTypes.STRING,
  },
  toss_decision: {
    type: DataTypes.STRING,
  },
  result: {
    type: DataTypes.STRING,
  },
  dl_applied: {
    type: DataTypes.INTEGER,
  },
  winner: {
    type: DataTypes.STRING,
  },
  win_by_runs: {
    type: DataTypes.INTEGER,
  },
  win_by_wickets: {
    type: DataTypes.INTEGER,
  },
  player_of_match: {
    type: DataTypes.STRING,
  },
  venue: {
    type: DataTypes.STRING,
  },
  umpire1: {
    type: DataTypes.STRING,
  },
  umpire2: {
    type: DataTypes.STRING,
  },
  umpire3: {
    type: DataTypes.INTEGER,
  },
});
module.exports = matches;
