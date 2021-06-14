import { Router } from 'express';
import { findAllRecipe, findOneRecipe, updateRecipe, saveRecipe, removeRecipe } from '../controller/recipe';

const recipe: Router = Router();

// Retrieve all recipes
recipe.get('/', findAllRecipe);

// Retrieve a Specific recipe
recipe.get('/:id', findOneRecipe);

// Update a recipe with Id
recipe.put('/:id', updateRecipe);

// Delete a recipe with Id
recipe.delete('/:id', removeRecipe);

recipe.post('/save', saveRecipe);

export default recipe;
