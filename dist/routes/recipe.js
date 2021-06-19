"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recipe_1 = require("../controller/recipe");
const recipe = express_1.Router();
// Retrieve all recipes
recipe.get('/', recipe_1.findAllRecipe);
// Retrieve a Specific recipe
recipe.get('/:id', recipe_1.findOneRecipe);
// Update a recipe with Id
recipe.put('/:id', recipe_1.updateRecipe);
// Delete a recipe with Id
recipe.delete('/:id', recipe_1.removeRecipe);
recipe.post('/', recipe_1.saveRecipe);
exports.default = recipe;
//# sourceMappingURL=recipe.js.map