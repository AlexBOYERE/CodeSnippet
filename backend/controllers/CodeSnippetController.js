const CodeSnippet = require("../models/codeSnippet");

exports.getCodeSnippets = async (req, res) => {
    try {
        const codeSnippets = await CodeSnippet.find();
        res.json(codeSnippets);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createCodeSnippet = async (req, res) => {
    try {
        const { /* Valeur à mettre */ } = req.body;
        const newCodeSnippet = new CodeSnippet({ /* Valeur à mettre */ });
        await newCodeSnippet.save();
        res.status(201).json(newCodeSnippet);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};