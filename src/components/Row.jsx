import axios from "../axios.js";
import React, { useState, useEffect } from "react";
import debounce from "lodash.debounce";
import movieTrailer from "movie-trailer";
import "../components/Row.css";
import YouTube from "react-youtube";
import {useSwiper} from "swiper/react";
import {GrCaretNext, GrCaretPrevious} from 'react-icons/gr';
import { IconContext } from "react-icons";

function Row({
  title,
  fetchUrl,
  isLargeRow,
  inputSearchValue,
  movieForBanner,
  setMovieForBanner,
}) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [movieHoverShow,setMovieHoverShow]=useState(false);
  const base_url = "https://image.tmdb.org/t/p/original/";
 const swiper=useSwiper();
 
 function displayMovieDetailsOnTop(movie)
 {
  if(movie)
  {
  
  setMovieHoverShow(true);
console.log("HOVER SHOW VALUE IS "+movieHoverShow);
  }
}

function removeMovieDetails(movie)
 {
  if(movie)
  {
  setMovieHoverShow(false);
console.log("HOVER SHOW VALUE IS "+movieHoverShow);
  }
}

  useEffect(() => {
    const debouncedSearch = debounce(async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }, 500);
    debouncedSearch();
  }, [fetchUrl]);

  const opts = {
    height: "500",
    width: "100%",
    playVars: {
      autoplay: 1,
    },
  };

  //------------DISPLAYING MOVIES ON THE BANNER FROM ROW-------------------/
  const getMovieIdToDisplay = (movie) => {
    setMovieForBanner(movie);
  };
  // const playTrailer=(movie)=>
  // {
  //   setTrailerUrl(`${baseURL_forTrailer}${movie?.key}`);
  // }

  const playTrailer = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        movie?.original_name || movie?.original_title || movie?.name || ""
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log("error is " + error));
    }
  };
  return (
    <div className="row">
      <h2 className="pt-4">{title || inputSearchValue}</h2>
      
        <div className="row__posters">
          {movies.map(
            (movie) =>
              ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
    <div className="position-relative" onMouseOver={()=>displayMovieDetailsOnTop(movie)} onMouseLeave={()=>removeMovieDetails(movie)} >
                  <img
                    style={{ cursor: "pointer" }}
                    onMouseOver={() => getMovieIdToDisplay(movie)}
                     onClick={() => playTrailer(movie)}
                    className={`row__poster ${
                      isLargeRow && "row__posterLarge"
                    }`}
                    key={movie.id}
                    src={`${base_url}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt={movie.name}
                  />  
                  {movieHoverShow && 
                  <div className="movieDetails">
                    {movie.name}
                  </div>}
                  </div>            
              )
          )}
        </div>
        <button onClick={()=>swiper.slidePrevious() } className="prevBtn">
        <IconContext.Provider
      value={{ color: 'blue', size: '50px' }}
    ><GrCaretPrevious/></IconContext.Provider>
     
        </button>  
        <button onClick={()=>swiper.slideNext()} className="nextBtn"> 
         <IconContext.Provider
      value={{ color: 'blue', size: '50px' }}
    ><GrCaretNext/></IconContext.Provider></button>  
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      {/* <div className="playTrailerArea" width="100%" height="600px">{movieTrailer}</div> */}
    </div>
  );
}

export default Row;
