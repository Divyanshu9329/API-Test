const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bfhlRoutes = require("./routes/bfhlRoutes");

const app = express();
const PORT = 5000;

const path = require("path");

// Serve static frontend
app.use(express.static(path.join(__dirname, "frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

app.use(cors());
app.use(bodyParser.json());
app.use("/bfhl", bfhlRoutes);

app.get("/", (req, res) => res.send("BFHL API is running"));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
