import { axiosInstance } from "../../network/axiosInstance";

// Actions using Redux Thunk
export const GetTVshowsAction = () => async (dispatch) => {
    return axiosInstance
      .get("/tv/popular")
      .then((res) =>
        dispatch({
          type: "GET_POPULAR",
          payload: res.data.results,
        })
      )
      .catch((err) => console.log(err));
       return axiosInstance
      .get("/tv/on_the_air")
      .then((res) =>
        dispatch({
          type: "GET_ON_THE_AIR",
          payload: res.data.results,
        })
      )
      .catch((err) => console.log(err));
       return axiosInstance
      .get("/tv/airing_today")
      .then((res) =>
        dispatch({
          type: "GET_AIRING_TODAY",
          payload: res.data.results,
        })
      )
      .catch((err) => console.log(err));
       return axiosInstance
      .get("/tv/top_rated")
      .then((res) =>
        dispatch({
          type: "GET_TOP_RATED",
          payload: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  };