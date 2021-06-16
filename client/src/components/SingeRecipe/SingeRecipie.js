import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  setActiveRecipe,
  deleteReceipe,
} from "../../Redux/reducers/recipeReducer";
import { showModal } from "../../Redux/reducers/modalReducer";

import Section from "../Section/Section";
import Button from "../Button/Button";

import "./SingleRecipe.scss";

const SingleRecipe = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.recipes);
  const id = useParams().id;
  const history = useHistory();

  const recipe = recipes.find((r) => r._id === id);

  const handleClick = () => {
    dispatch(setActiveRecipe(recipe));
    dispatch(showModal());
  };

  const handleDelete = () => {
    dispatch(deleteReceipe(id));
    history.push("/");
  };
  return (
    <Section>
      <div className="edit_btn">
        <Button text="Edit" variant="primary" handleClick={handleClick} />
        <Button text="Delete" variant="danger" handleClick={handleDelete} />
      </div>
      {recipe && (
        <div className="recipe">
          <div className="recipe__image">
            <img src={recipe.image} alt="Project" />
          </div>
          <h4 className="recipe__name">{recipe.name}</h4>
          <div className="recipe__rating">{recipe.rating}</div>
          <div className="recipe__description">{recipe.description}</div>
        </div>
      )}
    </Section>
  );
};

export default SingleRecipe;

// import React from "react";
// import { useParams } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

// import "./SingleRecipe.scss";

// import { setActiveRecipe } from "../../Redux/reducers/recipeReducer";
// import { showModal } from "../../Redux/reducers/modalReducer";

// import Section from "../Section/Section";
// import Button from "../Button/Button";

// const SingleRecipe = () => {
//   const dispatch = useDispatch();
//   const recipes = useSelector((state) => state.recipes.recipes);
//   const id = useParams().id;

//   const recipe = recipes.find((r) => r._id === id);
//   return (
//     <Section>
//       <div className="edit_btn">
//         <Button text="edit" variant="secondary" />
//       </div>
//       {recipe && (
//         <div className="recipe">
//           <div className="recipe__image">
//             <img src={recipe.image} alt="Project" />
//           </div>
//           <h4 className="recipe__name">{recipe.name}</h4>
//           <div className="recipe__rating">{recipe.rating}</div>
//           <div className="recipe__description">{recipe.description}</div>
//         </div>
//       )}
//     </Section>
//   );
// };

// export default SingleRecipe;
