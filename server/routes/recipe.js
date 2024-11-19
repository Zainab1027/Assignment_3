var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
// telling my router that I have this model
let Recipe = require('../model/recipe.js');
const recipe = require('../model/recipe.js');
let recipeController = require('../controllers/recipe.js')
/* Get route for the book list - Read Operation */
/*
GET,
Post,
Put --> Edit/Update
*/
/* Read Operation --> Get route for displaying the books list */
router.get('/',async(req,res,next)=>{
try{
    const RecipeList = await Recipe.find();
    res.render('Recipe/list',{
        title:'Recipes',
        RecipeList:RecipeList
    })}
    catch(err){
        console.error(err);
        res.render('Recipe/list',{
            error:'Error on the server'
        })
    }
    });
/* Create Operation --> Get route for displaying me the Add Page */
router.get('/add',async(req,res,next)=>{
    try{
        res.render('Recipe/add',{
            title: 'Add Recipe'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Recipe/list',{
            error:'Error on the server'
        })
    }
});
/* Create Operation --> Post route for processing the Add Page */
router.post('/add',async(req,res,next)=>{
    try{
        let newRecipe = Recipe({
            "Title":req.body.Title,
            "Ingredients":req.body.Ingredients,
            "Steps":req.body.Steps,
            "Description":req.body.Description
        });
        Recipe.create(newRecipe).then(()=>{
            res.redirect('/recipeslist');
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Recipe/list',{
            error:'Error on the server'
        })
    }
});
/* Update Operation --> Get route for displaying me the Edit Page */
router.get('/edit/:id',async(req,res,next)=>{
    try{
        const id = req.params.id;
        const recipeToEdit= await Recipe.findById(id);
        res.render('Recipe/edit',
            {
                title:'Edit Recipe',
                Recipe:recipeToEdit
            }
        )
    }
    catch(err)
    {
        console.error(err);
        next(err); // passing the error
    }
});
/* Update Operation --> Post route for processing the Edit Page */ 
router.post('/edit/:id',async(req,res,next)=>{
    try{
        let id=req.params.id;
        let updatedRecipe = Recipe({
            "_id":id,
            "Title":req.body.Title,
            "Ingredients":req.body.Ingredients,
            "Steps":req.body.Steps,
            "Description":req.body.Description
        });
        Recipe.findByIdAndUpdate(id,updatedRecipe).then(()=>{
            res.redirect('/recipeslist')
        })
    }
    catch(err){
        console.error(err);
        res.render('Recipe/list',{
            error:'Error on the server'
        })
    }
});
/* Delete Operation --> Get route to perform Delete Operation */
router.get('/delete/:id',async(req,res,next)=>{
    try{
        let id=req.params.id;
        Recipe.deleteOne({_id:id}).then(()=>{
            res.redirect('/recipeslist')
        })
    }
    catch(error){
        console.error(err);
        res.render('Recipe/list',{
            error:'Error on the server'
        })
    }
});
module.exports = router;