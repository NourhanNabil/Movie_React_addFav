import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FavoriteShowAction } from "../store/actions/FavoriteShowAction";
import { GetTVshowsAction } from "../store/actions/GetTVshowsAction";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons";  

export default function TopRatedTvShows(){
let TopRatedTvShows = useSelector((state) => state.TVshowsInCombineReducer.TVshows);
let favorite = useSelector((state) => state.FavoriteTVshowsInCombineReducer.favoriteTVshows);
const dispatch = useDispatch();
useEffect(() => {
   dispatch(GetTVshowsAction());
 }, []);
 const AddTVshowToFav = (TVshowsList) => {
    const foundTVshow = favorite.filter((TVshow)=> TVshow.id === TVshowsList.id)
    if ( foundTVshow.length === 0 ){
      favorite.push(TVshowsList);
      dispatch(FavoriteShowAction(favorite));
    }
    else{
      const arr = favorite.filter((TVshow)=> TVshow.id !== foundTVshow[0].id)
      dispatch(FavoriteShowAction(arr));
    }
  };
 return(
    <div className=" container-float PopularMovies ">
        {TopRatedTvShows.map((item)=>{
            return(
                <div key={item.id} className="card col-2 m-4" >
                    <Link to={`/tv/top_rated/${item.id}`}><img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className="card-img-top" alt={item.original_title}/></Link>
                    <div className="card-body">
                        <h6 >{item.name}</h6>
                        <p className="card-text">Rating: {item.vote_average}</p>
                        <p className="card-text">First Air Date: {item.first_air_date}</p>
                        <button className="btn btn-dark" onClick={() => AddTVshowToFav(item)}> <FontAwesomeIcon className=" fs-5 " icon={faStar}/> Mark as favourite </button> 
                    </div>
                </div>
                 )
        })}
    </div>
 )
}

            