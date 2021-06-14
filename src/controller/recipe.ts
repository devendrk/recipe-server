import { Request, Response } from 'express';
import { findAll, findOne, remove, save, update } from '../services/recipe.services';

    export const findAllRecipe = async (req: Request, res: Response) => {
        try {
            const recipe = await findAll();
            if (recipe != null) {
                res.status(200).send({
                    success: true,
                    data: recipe
                });
            } else {
                return res.status(404).send({
                    success: false,
                    message: 'Recipe not found',
                    data: null
                });
            }
        } catch (err) {
            res.status(500).send({
                success: false,
                message: err.toString(),
                data: null
            });
        }
    };

    export const findOneRecipe = async (req: Request, res: Response): Promise<any> => {
        try {
            const recipe = await findOne(req.params.id);
            if (!recipe) {
                return res.status(404).send({
                    success: false,
                    message: 'Recipe not found',
                    data: null
                });
            } else {
                res.status(200).send({
                    success: true,
                    data: recipe
                });
            }
        } catch (err) {
            res.status(500).send({
                success: false,
                message: err.toString(),
                data: null
            });
        }
    };

    export const updateRecipe = async (req: Request, res: Response): Promise<any> => {
        const { name, description } = req.body;
        try {
            const recipeUpdated = await update(req.params.id, { name, description })
            if (recipeUpdated == null) {
                return res.status(404).send({
                    success: false,
                    message: 'Recipe not found',
                    data: null
                });
            } else {
                res.status(200).send({
                    success: true,
                    data: recipeUpdated
                });
            }

        } catch (err) {
            res.status(500).send({
                success: false,
                message: err.toString(),
                data: null
            });
        }
    };

    export const removeRecipe = async (req: Request, res: Response): Promise<any> => {
        try {
            const recipe = await remove(req.params.id);
            if (recipe != null) {
                return res.status(404).send({
                    success: false,
                    message: 'Recipe not found',
                    data: null
                });
            }
            res.status(204).send();
        } catch (err) {
            res.status(500).send({
                success: false,
                message: err.toString(),
                data: null
            });
        }
    }


    export const saveRecipe = async (req: Request, res: Response): Promise<any> => {
        try {
            const recipe = await save(req.body)
            if (recipe) {
                res.status(201).send({
                    success: true,
                    message: 'Recipe Successfully created',
                    data: recipe
                });
            }

        } catch (error) {
            res.status(500).send({
                success: false,
                message: error.toString(),
                data: null
            });
        }
    }




