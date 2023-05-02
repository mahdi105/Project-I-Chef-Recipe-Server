const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const chefs = require('./data/chefs.json');

const recipes = require('./data/recipes.json');
const path = require('path');
const cors = require('cors');
app.use(cors());

app.use('/assets/images', express.static(path.join(__dirname,'assets','images')));
app.use('/assets/images/cuisine', express.static(path.join(__dirname,'assets','images','cuisine')));
// home 
app.get('/',(req,res) => {
    res.send('Recipes Server is running');
})

// Chefs API
app.get('/chefs',(req,res)=> {
    res.send(chefs);
})
// All Recipes API
app.get('/recipes',(req,res)=>{
    res.send(recipes);
})
// Certain Chef Recipes by Id API
app.get('/chef/recipes/:id',(req,res) => {
    const id = req.params.id;
    const chefRecipes = recipes.filter(recipe => recipe.chef_id === id);
    res.send(chefRecipes);
})


app.listen(port, () =>{
    console.log("The recipes server is running in the port:", port);
})
