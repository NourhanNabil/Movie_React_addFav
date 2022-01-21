import { axiosInstance } from "../../network/axiosInstance";

// Actions using Redux Thunk
export const GetMoviesAction = () => async (dispatch) => {
    return axiosInstance
      .get("/movie/popular")
      .then((res) =>
        dispatch({
          type: "GET_POPULAR",
          payload: res.data.results,
        })
      )
      .catch((err) => console.log(err));
       return axiosInstance
      .get("/movie/now_playing")
      .then((res) =>
        dispatch({
          type: "GET_NOW_PLAYING",
          payload: res.data.results,
        })
      )
      .catch((err) => console.log(err));
       return axiosInstance
      .get("/movie/upcoming")
      .then((res) =>
        dispatch({
          type: "GET_UPCOMING",
          payload: res.data.results,
        })
      )
      .catch((err) => console.log(err));
       return axiosInstance
      .get("/movie/top_rated")
      .then((res) =>
        dispatch({
          type: "GET_TOP_RATED",
          payload: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  };