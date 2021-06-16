import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  getRecipes,
  setActiveRecipe,
} from "../../Redux/reducers/recipeReducer";
import { hideModal } from "../../Redux/reducers/modalReducer";

import Recipes from "../Recipes/Recipes";
import Navbar from "../Navbar/Navbar";
import Modal from "../Modal/Modal";
import Footer from "../Footer/Footer";
import SingleRecipe from "../SingeRecipe/SingeRecipie";

import "./App.scss";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  const state = useSelector((state) => state);
  return (
    <>
      <Router>
        <Navbar />
        <Modal
          modalIsOpen={state.modal.modalOpen}
          handleClose={() => {
            dispatch(hideModal());
            dispatch(setActiveRecipe(null));
          }}
        />
        <div className="layout">
          <Switch>
            <Route exact path="/recipe/:id" component={SingleRecipe} />
            <Route exact path="/" component={Recipes} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;

//////////////////////////////////
//   return (
//     <>
//       <Router>
//         <Navbar />
//         <Modal
//           modalIsOpen={state.modal.modalOpen}
//           handleClose={() => dispatch(hideModal())}
//         />
//         <div className="layout">
//           <Switch>
//             <Route exact path="/recipe/:id" component={SingleRecipe} />
//             <Route exact path="/" component={Recipes} />
//           </Switch>
//         </div>
//         <Footer />
//       </Router>
//     </>
//   );
// }

// export default App;
