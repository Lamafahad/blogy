// Require Necessary NPM Packages
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    body: {type: String, default: 'You\'re a great writer!s!'}
},{timestamps:true})


// Define Article Schema
const articleSchema = new mongoose.Schema({
    title:{ type: String, required: true},
    content: String,
    author: {type: String, required: true},
    published: {type: Boolean, default: true},
    publishedOn: {type: Date, default: Date.now},
}, {
    timestamps: true,
});

// compile our Model based on the Schema
const Article = mongoose.model('Article', articleSchema);

const Comment = mongoose.model('Comment', commentSchema)

// Export our Model for use 
module.exports = {Article, Comment}