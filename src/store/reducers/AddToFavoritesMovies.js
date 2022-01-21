const State_Initial = {
    favoriteMovies : [],
};

//Reducer using Redux Thunk  
  export default function AddToFavoriteMovies(state = State_Initial, action) {
    switch (action.type) {
      case "ADD_FAVORITE_MOVIE":
        return {
          ...state,
          favoriteMovies: action.payload,
        };
      default:
        return state;
    }
  }