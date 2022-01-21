import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';


export default function Favorites(){
 const favMovie = useSelector((state) => state.FavoriteMoviesInCombineReducer.favoriteMovies);
  useEffect(() => {
      },
      [favMovie]);

 return(
    <div className="container-float PopularMovies">
        {favMovie.map((item) => {
         return(
                <div key={item.id} className="card col-2 m-4" >
                   <Link to={`/movie/popular/${item.id}`}> <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className="card-img-top" alt={item.original_title}/> </Link>
                    <div className="card-body">
                       <h6>{item.title}</h6>
                        <p className="card-text">Rating: {item.vote_average}</p>
                        <p className="card-text">Release Date: {item.release_date}</p>    
                    </div>
                </div>
                 )
        })}
    </div>
 )
}

