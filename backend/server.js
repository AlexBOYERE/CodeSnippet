import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Charger les variables d'environnement
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Route simple pour tester
app.get("/", (req, res) => {
    res.json({ message: "Bienvenue sur mon API Express.js 🚀" });
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});