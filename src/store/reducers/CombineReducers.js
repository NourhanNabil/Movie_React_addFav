import { combineReducers } from "redux";
import AddToFavoriteMovies from "./AddToFavoritesMovies";
import AddToFavoriteTVshows from "./AddToFavoriteTVshows";
import GetMoviesApis from "./GetMoviesApis";
import GetTVshowsApis from "./GetTVshowsApis";
export default combineReducers ({
    MoviesInCombineReducer: GetMoviesApis,
    TVshowsInCombineReducer: GetTVshowsApis,
    FavoriteMoviesInCombineReducer: AddToFavoriteMovies,
    FavoriteTVshowsInCombineReducer: AddToFavoriteTVshows,
});