const express = require("express");
const { getAllMatches } = require("../controller/matches.controller");
const router = express.Router();

router.get("/getAll", getAllMatches);
module.exports = router;
