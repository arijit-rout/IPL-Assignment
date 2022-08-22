const { DataTypes } = require("sequelize");
const dbConnection = require("../db");

const deliveries = dbConnection.define("deliveries", {
  match_id: {
    type: DataTypes.INTEGER,
  },
  inning: {
    type: DataTypes.INTEGER,
  },
  batting_team: {
    type: DataTypes.STRING,
  },
  bowling_team: {
    type: DataTypes.STRING,
  },
  over: {
    type: DataTypes.INTEGER,
  },
  ball: {
    type: DataTypes.INTEGER,
  },
  batsman: {
    type: DataTypes.STRING,
  },
  non_striker: {
    type: DataTypes.STRING,
  },
  bowler: {
    type: DataTypes.STRING,
  },
  is_super_over: {
    type: DataTypes.INTEGER,
  },
  wide_runs: {
    type: DataTypes.INTEGER,
  },
  bye_runs: {
    type: DataTypes.INTEGER,
  },
  legbye_runs: {
    type: DataTypes.INTEGER,
  },
  noball_runs: {
    type: DataTypes.INTEGER,
  },
  penalty_runs: {
    type: DataTypes.INTEGER,
  },
  batsman_runs: {
    type: DataTypes.INTEGER,
  },
  extra_runs: {
    type: DataTypes.INTEGER,
  },
  total_runs: {
    type: DataTypes.INTEGER,
  },
  player_dismissed: {
    type: DataTypes.STRING,
  },
  dismissal_kind: {
    type: DataTypes.STRING,
  },
  fielder: {
    type: DataTypes.STRING,
  },
});
module.exports = deliveries;
