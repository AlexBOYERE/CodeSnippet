const express = require("express");
const {getCodeSnippets, createCodeSnippet} = require("../controllers/CodeSnippetController.js");
const router = express.Router();

router.get("/", getCodeSnippets);
router.post("/", createCodeSnippet);

module.exports = router;