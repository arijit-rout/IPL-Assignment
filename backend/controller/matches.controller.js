const Matches = require("../model/matches.model");

module.exports.getAllMatches = async (req, res) => {
  try {
    const AllMatches = await Matches.findAll();
    return res.status(200).json({
      success: true,
      message: "fetched all matches",
      payload: AllMatches,
      count: AllMatches.length,
    });
  } catch (error) {
    return res
      .status(200)
      .json({
        success: false,
        message: error.message,
        payload: null,
        count: 0,
      });
  }
};
