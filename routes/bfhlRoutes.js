const express = require("express");
const router = express.Router();
const { processInput } = require("../controllers/bfhlController");

router.post("/process", processInput);

module.exports = router;
