import Recipe, { IRecipe } from '../models/recipe';

    let images = ['https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200.jpg',
                  'https://www.foodies.pk/wp-content/uploads/2019/09/Double-Beef-Burger-and-Chicken-Burger-with-Cheese-.jpg'
                 ]

   export const findAll = async (): Promise<any> => {
        try {
            const recipe = await Recipe.find({})
            return recipe;
        } catch (error) {
            return error
        }
    }

    export const save = async (data: any): Promise<any> => {
        //const payload = validate(data, joiSchema.userType);
        const { name, description, rating  } = data;
        const imageLink = images[Math.floor(Math.random() * images.length)];
        const recipe: IRecipe = new Recipe({ name, description, rating , image: imageLink });
        const newRecipe = await recipe.save();
        return newRecipe;
    }

    export const remove = async (id: String): Promise<any> => {
        try {
            const recipe = await Recipe.findByIdAndRemove(id);
            if (!recipe) {
                return null
            };
        } catch (error) {
            console.log(error);
            return error
        }
    }

    export const findOne = async (id: String): Promise<any> => {
        try {
            const recipe = await Recipe.findById(id);
            if (!recipe) {
                return null;
            } else {
                return recipe
            }
        } catch (error) {
            return error
        }
    }
    export const update = async (id: String, data: any): Promise<any> => {
        const recipeUpdated = await Recipe.findByIdAndUpdate(id,
            {
                $set:
                    data

            },
            { new: true }
        )
        if (!recipeUpdated) {
            return null
        } else {
            return recipeUpdated
        }
    }

    export const findOneAndUpdate = async (recipeId: String, pushObject: any): Promise<any> => {
        const updatedRecipe = await Recipe.findOneAndUpdate({ _id: recipeId },
             function (error, success) {
                if (error) {
                    return error
                } else {
                    return success
                }
            });
        return updatedRecipe;
    }

    export const findOneAndRemove = async (userId: String, pullObject: any): Promise<any> => {
        const updatedUser = await Recipe.findOneAndUpdate({ _id: userId },
            function (error, success) {
                if (error) {
                    return error
                } else {
                    return success
                }
            });
        return updatedUser;
    }
