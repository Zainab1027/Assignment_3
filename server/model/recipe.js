//const { Collection, default: mongoose } = require("mongoose");

const mongoose = require("mongoose");

let recipeModel = mongoose.Schema({
    Title: String,
    Ingredients: String,
    Steps: String,
    Description: String,
},
{
    collection:"Recipes"
});
module.exports =mongoose.model('Recipe',recipeModel);
