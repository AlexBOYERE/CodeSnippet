const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/UserRoutes");

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Connexion à MongoDB
mongoose.connect(process.env.DB_MONGO_URI)
    .then(() => console.log("MongoDB connecté"))
    .catch(err => console.log("Erreur MongoDB:", err));

// Routes
app.get("/", (req, res) => {
    res.send("Bienvenue sur mon API !");
})

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));