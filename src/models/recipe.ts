import { Schema, Model, model, Document } from "mongoose";
/**
 * Interface to model the Hobby Schema for TypeScript.
 * @param name:string
 * @param description:string
 * @param image:String
 * @param rating:String
 */

export interface IRecipe extends Document {
    name: string,
    description: string,
    image: string,
    rating: number
}

const RecipeSchema: Schema = new Schema({
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

const Recipe: Model<IRecipe> = model("Recipe", RecipeSchema);
export default Recipe