//Reducer using Redux Thunk
const State_Initial = {
  movies: [],
};
export default function GetMoviesApis(state = State_Initial, action) {
  switch (action.type) {
    case "GET_POPULAR":
      return {
        ...state,
        movies: action.payload,
      };
       case "GET_NOW_PLAYING":
      return {
        ...state,
        movies: action.payload,
      };
       case "GET_UPCOMING":
      return {
        ...state,
        movies: action.payload,
      };
       case "GET_TOP_RATED":
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
}