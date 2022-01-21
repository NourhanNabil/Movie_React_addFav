// Actions using Redux Thunk
export const FavoriteShowAction = (favorite) => (dispatch) => {
    return (
        dispatch({
          type: "ADD_FAVORITE_SHOW",
          payload: favorite,
        })
      )
  };