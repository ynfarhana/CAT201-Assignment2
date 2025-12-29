const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/company", (req, res) => {
  res.json({
    name: "NextGen Tech Solutions",
    mission: "To deliver innovative and reliable IT solutions.",
    vision: "To become a leading global technology company.",
    services: [
      "Web Development",
      "Mobile App Development",
      "IT Consulting",
      "Cloud Solutions"
    ]
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
