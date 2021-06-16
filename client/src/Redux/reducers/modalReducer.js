const initialState = {
  modalOpen: false,
};
const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return { ...state, modalOpen: true };
    case "HIDE_MODAL":
      return { ...state, modalOpen: false };
    default:
      return state;
  }
};

//  Action Creators
export const showModal = () => {
  return { type: "SHOW_MODAL" };
};
export const hideModal = () => ({ type: "HIDE_MODAL" });

export default modalReducer;
