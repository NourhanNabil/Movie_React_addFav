//Reducer using Redux Thunk
const State_Initial = {
  TVshows: [],
};
export default function GetTVshowsApis(state = State_Initial, action) {
  switch (action.type) {
    case "GET_POPULAR":
      return {
        ...state,
        TVshows: action.payload,
      };
       case "GET_ON_THE_AIR":
      return {
        ...state,
        TVshows: action.payload,
      };
       case "GET_AIRING_TODAY":
      return {
        ...state,
        TVshows: action.payload,
      };
       case "GET_TOP_RATED":
      return {
        ...state,
        TVshows: action.payload,
      };
    default:
      return state;
  }
}