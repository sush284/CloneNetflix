import React, { useEffect, useState } from "react";
import axios from '../axios';
import requests from "../Requests.js";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Banner = ({movieForBanner,setMovieForBanner}) => {
const [movieTrailerUrl,setMovieTrailerUrl]=useState("");
const [movie,setMovie]=useState([]);

useEffect(()=>{
    async function fetchData(){
      
      const request=await axios.get(requests?.requestNetflixOriginals);
        setMovie(request.data.results[
            Math.floor(Math.random()*request.data.results.length-1)
        ]
        );
        return request;
    }
    fetchData();
},[]);
console.log(movie);

  function truncate(string, n) {
    return string.length > n
      ? string.substr(0, n - 1) + ` ....read more`
      : string;
  }

  const opts={
    height:"500",
    width:"100%",
    playVars:{
      autoplay:1,
    },
  };

  const playTrailer=(movie)=>
  {
    if(movieTrailerUrl)
    {
      setMovieTrailerUrl("");
    }
    else
    {
      movieTrailer(movie?.original_name||movie?.original_title||movie?.name||"")
      .then((url)=>{
      const urlParams=new URLSearchParams(new URL(url).search);
      setMovieTrailerUrl(urlParams.get("v"));
      })
      .catch((error)=>console.log("error is "+error));
    }
  }
  
  return (
    movieForBanner?
    <header className="banner"
    style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movieForBanner?.backdrop_path}")`,
    }}
  >
    <div className="banner__contents">
     
      <h1 className="banner__title">{movieForBanner?.original_name || movieForBanner?.name ||movieForBanner?.title}</h1>

      <div className="banner_buttons">
        <button className="banner__button" 
        // onClick={()=>playTrailer(movieForBanner)}
        >Play</button>
        <button className="banner__button">My List</button>
      </div>
      <h1 className="banner__description">
        {truncate(`${movieForBanner?.overview||movieForBanner?.description}`,200)}
      </h1>
    </div>
    <div className="banner__fadeBottom" />
    <div className="playTrailerArea">
    {movieTrailerUrl && <YouTube videoId={movieTrailerUrl} opts={opts}/>}

    </div>
  </header>  
  :
  <header className="banner"
  style={{
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,

    }}
>
  <div className="banner__contents">
   
    <h1 className="banner__title">{movie?.original_name || movie?.name ||movie?.title}</h1>

    <div className="banner_buttons">
      <button className="banner__button"
       onClick={()=>playTrailer(movieForBanner)}
       >Play</button>
      <button className="banner__button">My List</button>
    </div>
    <h1 className="banner__description">
      {truncate(`${movie?.overview||movie?.description}`,200)}
    </h1>
  </div>
  <div className="banner__fadeBottom" />
  <div className="playTrailerArea" width={"100%"} height={"600px"}>
    {movieTrailerUrl && <YouTube videoId={movieTrailerUrl} opts={opts}/>}

    </div>

</header>
  );
};

export default Banner;
