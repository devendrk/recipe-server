"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RecipeSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    rating: {
        type: String
    }
});
const Recipe = mongoose_1.model("Recipe", RecipeSchema);
exports.default = Recipe;
//# sourceMappingURL=recipe.js.map