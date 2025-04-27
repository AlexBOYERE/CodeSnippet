const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const CodeSnippet = require("../models/CodeSnippet");

// Route test
router.get("/test", async (req, res) => {
    res.status(200).json({})
})

// Route d'ajout
router.post("/", authMiddleware,async (req, res) => {
    try {
        const {title, description, code, tag, language} = req.body;
        const score = 0;
        const authorId = req.user.userId;

        // Code similaire ?
        /*
        Généré un code analysé par l'IA pour voir si un code similaire existe déjà ou pas
         */

        // Création du snippet
        const newCodeSnippet = new CodeSnippet({
            title,
            description,
            code,
            tag,
            score,
            language,
            author: authorId,
        });

        await newCodeSnippet.save();

        res.status(201).json({ message: "Code ajouté avec succès !", snippet: newCodeSnippet });
    } catch (error) {
        res.status(500).json({message: "Erreur lors de l'ajout", error});
    }
})

// Route de récupération des snippets trier par les plus récent
router.get("/", async (req, res) => {
    try {
        // Récupération des snippets
        const codeSnippets = await CodeSnippet.find({}).sort({ createdAt: -1 });

        res.status(201).json({ message: "Les codes ont été récupérer avec succès !", snippet: codeSnippets });
    } catch (error) {
        res.status(500).json({message: "Erreur lors de la récupération", error});
    }
})

module.exports = router;