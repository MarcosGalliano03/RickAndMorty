import { ADD_FAV, REMOVE_FAV } from "./actions_types";

const initialState = {
  myFavorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return { ...state, myFavorites: action.payload, allCharacters: action.payload };

    case REMOVE_FAV:
      return { ...state, myFavorites: action.payload };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
