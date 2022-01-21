const State_Initial = {
    favoriteTVshows : [],
};

//Reducer using Redux Thunk  
  export default function AddToFavoriteTVshows(state = State_Initial, action) {
    switch (action.type) {
      case "ADD_FAVORITE_SHOW":
        return {
          ...state,
          favoriteTVshows: action.payload,
        };
      default:
        return state;
    }
  }