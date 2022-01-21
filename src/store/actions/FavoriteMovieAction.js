// Actions using Redux Thunk
export const FavoriteMovieAction = (favorite) => (dispatch) => {
    return (
        dispatch({
          type: "ADD_FAVORITE_MOVIE",
          payload: favorite,
        })
      )
  };