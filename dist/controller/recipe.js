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
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveRecipe = exports.removeRecipe = exports.updateRecipe = exports.findOneRecipe = exports.findAllRecipe = void 0;
const recipe_services_1 = require("../services/recipe.services");
exports.findAllRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipe = yield recipe_services_1.findAll();
        if (recipe != null) {
            res.status(200).send({
                success: true,
                data: recipe
            });
        }
        else {
            return res.status(404).send({
                success: false,
                message: 'Recipe not found',
                data: null
            });
        }
    }
    catch (err) {
        res.status(500).send({
            success: false,
            message: err.toString(),
            data: null
        });
    }
});
exports.findOneRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipe = yield recipe_services_1.findOne(req.params.id);
        if (!recipe) {
            return res.status(404).send({
                success: false,
                message: 'Recipe not found',
                data: null
            });
        }
        else {
            res.status(200).send({
                success: true,
                data: recipe
            });
        }
    }
    catch (err) {
        res.status(500).send({
            success: false,
            message: err.toString(),
            data: null
        });
    }
});
exports.updateRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description } = req.body;
    try {
        const recipeUpdated = yield recipe_services_1.update(req.params.id, { name, description });
        if (recipeUpdated == null) {
            return res.status(404).send({
                success: false,
                message: 'Recipe not found',
                data: null
            });
        }
        else {
            res.status(200).send({
                success: true,
                data: recipeUpdated
            });
        }
    }
    catch (err) {
        res.status(500).send({
            success: false,
            message: err.toString(),
            data: null
        });
    }
});
exports.removeRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipe = yield recipe_services_1.remove(req.params.id);
        if (recipe != null) {
            return res.status(404).send({
                success: false,
                message: 'Recipe not found',
                data: null
            });
        }
        res.status(204).send();
    }
    catch (err) {
        res.status(500).send({
            success: false,
            message: err.toString(),
            data: null
        });
    }
});
exports.saveRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('req', req, res);
    try {
        const recipe = yield recipe_services_1.save(req.body);
        if (recipe) {
            res.status(201).send({
                success: true,
                message: 'Recipe Successfully created',
                data: recipe
            });
        }
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: error.toString(),
            data: null
        });
    }
});
//# sourceMappingURL=recipe.js.map