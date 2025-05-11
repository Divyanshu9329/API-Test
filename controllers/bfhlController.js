const { filterData } = require("../models/bfhlModel");

const processInput = (req, res) => {
    const { input, filters } = req.body;

    if (!input || !Array.isArray(input) || !filters || !Array.isArray(filters)) {
        return res.status(400).json({ error: "Invalid input or filters" });
    }

    const response = filterData(input, filters);
    res.json(response);
};

module.exports = { processInput };
