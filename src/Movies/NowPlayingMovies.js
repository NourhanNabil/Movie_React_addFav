import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FavoriteMovieAction } from "../store/actions/FavoriteMovieAction";
import { GetMoviesAction } from "../store/actions/GetMoviesAction";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons";  

export default function NowPlayingMovies(){
let NowPlayingMovies = useSelector((state) => state.MoviesInCombineReducer.movies);
let favorite = useSelector((state) => state.FavoriteMoviesInCombineReducer.favoriteMovies);
const dispatch = useDispatch();
useEffect(() => {
   dispatch(GetMoviesAction());
 }, []);
const AddMovieToFav = (movieList) => {
    const foundMovie = favorite.filter((movie)=> movie.id === movieList.id)
    if ( foundMovie.length === 0 ){
      favorite.push(movieList);
      dispatch(FavoriteMovieAction(favorite));
    }
    else{
      const arr = favorite.filter((movie)=> movie.id !== foundMovie[0].id)
      dispatch(FavoriteMovieAction(arr));
    }
  };
 return(
    <div className=" container-float PopularMovies ">
        {NowPlayingMovies.map((item)=>{
            return(
                <div key={item.id} className="card col-2 m-4" >
                   <Link to={`/movie/now_playing/${item.id}`}> <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className="card-img-top" alt={item.original_title}/></Link>
                    <div className="card-body">
                        <h6>{item.title}</h6>
                        <p className="card-text">Rating: {item.vote_average}</p>
                        <p className="card-text">Release Date: {item.release_date}</p>
                        <button className="btn btn-dark" onClick={() => AddMovieToFav(item)}> <FontAwesomeIcon className=" fs-5 " icon={faStar}/> Mark as favourite </button> 
                    </div>
                </div>
                 )
        })}
    </div>
 )
}

            