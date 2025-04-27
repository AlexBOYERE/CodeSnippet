const mongoose = require('mongoose');

const CodeSnippetSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    code: {type: String, required: true, unique: true},
    tag: {type: String, required: true},
    score: {type: Number, required: true},
    language: {type: String, required: true},
    author: {type: String, required: true},
}, {timestamps: true});

module.exports = mongoose.model('CodeSnippet', CodeSnippetSchema);