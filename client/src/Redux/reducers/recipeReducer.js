import recipeService from "../../services/recipes";

const initialState = { recipes: [], activeRecipe: null };
const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_RECIPES":
      return { ...state, recipes: action.payload };
    case "CREATE_RECIPES":
      return { ...state, recipes: [...state.recipes, action.payload] };
    case "SET_ACTIVE_RECIPE":
      return { ...state, activeRecipe: action.payload };
    case "EDIT_RECIPE":
      const updatedRecipe = state.recipes.map((r) =>
        r.id === action.payload.id ? action.payload.data : r
      );
      return { ...state, recipes: updatedRecipe };
    case "DELETE_RECEIPE":
      return {
        ...state,
        recipes: state.recipes.filter((r) => {
          return r._id !== action.payload;
        }),
      };

    default:
      return state;
  }
};

//  Action Creators
export const getRecipes = () => {
  return async (dispatch) => {
    const recipes = await recipeService.getAll();
    dispatch({
      type: "FETCH_RECIPES",
      payload: recipes.data,
    });
  };
};

export const addRecipes = (recipeObj) => {
  return async (dispatch) => {
    const recipes = await recipeService.createNewRecipe(recipeObj);
    console.log("rr", recipes);
    dispatch({
      type: "CREATE_RECIPES",
      payload: recipes.data,
    });
  };
};

export const editRecipes = (id, updatedRecipe) => {
  return async (dispatch) => {
    const recipes = await recipeService.updateReceipe(id, updatedRecipe);
    dispatch({
      type: "EDIT_RECIPE",
      payload: recipes,
    });
  };
};
export const deleteReceipe = (id) => {
  return async (dispatch) => {
    await recipeService.deleteReceipe(id);
    dispatch({
      type: "DELETE_RECEIPE",
      payload: id,
    });
  };
};

export const setActiveRecipe = (recipe) => {
  return {
    type: "SET_ACTIVE_RECIPE",
    payload: recipe,
  };
};

export default recipeReducer;
