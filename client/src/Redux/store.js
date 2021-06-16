import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import recipeReducer from "./reducers/recipeReducer.js";
import modalReducer from "./reducers/modalReducer";

const reducer = combineReducers({
  recipes: recipeReducer,
  modal: modalReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
