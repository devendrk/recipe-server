"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOneAndRemove = exports.findOneAndUpdate = exports.update = exports.findOne = exports.remove = exports.save = exports.findAll = void 0;
const recipe_1 = __importDefault(require("../models/recipe"));
let images = ['https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200.jpg',
    'https://www.foodies.pk/wp-content/uploads/2019/09/Double-Beef-Burger-and-Chicken-Burger-with-Cheese-.jpg'
];
exports.findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipe = yield recipe_1.default.find({});
        return recipe;
    }
    catch (error) {
        return error;
    }
});
exports.save = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, rating } = data;
    const imageLink = images[Math.floor(Math.random() * images.length)];
    const recipe = new recipe_1.default({ name, description, rating, image: imageLink });
    const newRecipe = yield recipe.save();
    return newRecipe;
});
exports.remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipe = yield recipe_1.default.findByIdAndRemove(id);
        if (!recipe) {
            return null;
        }
        ;
    }
    catch (error) {
        console.log(error);
        return error;
    }
});
exports.findOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipe = yield recipe_1.default.findById(id);
        if (!recipe) {
            return null;
        }
        else {
            return recipe;
        }
    }
    catch (error) {
        return error;
    }
});
exports.update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const recipeUpdated = yield recipe_1.default.findByIdAndUpdate(id, {
        $set: data
    }, { new: true });
    if (!recipeUpdated) {
        return null;
    }
    else {
        return recipeUpdated;
    }
});
exports.findOneAndUpdate = (recipeId, pushObject) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedRecipe = yield recipe_1.default.findOneAndUpdate({ _id: recipeId });
        return updatedRecipe;
    }
    catch (error) {
        return error;
    }
});
exports.findOneAndRemove = (userId, pullObject) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield recipe_1.default.findOneAndUpdate({ _id: userId });
    }
    catch (error) {
        return error;
    }
});
//# sourceMappingURL=recipe.services.js.map