import React, { useState} from 'react'
import NavigationBar from '../components/NavigationBar.jsx'
import Banner from '../components/Banner.jsx'
import "../components/NavigationBar.css";
import "../components/Banner.css";
import Row from '../components/Row.jsx';
import requests from '../Requests.js';
const MoviesHomeScreen = () => {

  // const [movieId,setMovieId]=useState(0);
  const [movieForBanner, setMovieForBanner]=useState(null);
  
  const [inputSearchValue, setInputSearchValue] = useState("");
  return (
    <div className="moviesHomeScreen">
      <NavigationBar inputSearchValue={inputSearchValue} setInputSearchValue={setInputSearchValue}/>
      {
        movieForBanner?<Banner movieForBanner={movieForBanner}/>:<Banner/>
        }

      {inputSearchValue ? 
        <Row title="searched movies" fetchUrl={requests.requestSearchMovie(inputSearchValue)} movieForBanner={movieForBanner} setMovieForBanner={setMovieForBanner} isLargeRow/> 
        :<>
          <Row title="NETFLIX ORIGINALS" fetchUrl={requests.requestNetflixOriginals} movieForBanner={movieForBanner} setMovieForBanner={setMovieForBanner} isLargeRow  />
          <Row title="Top Rated" fetchUrl={requests.requestTopRated} movieForBanner={movieForBanner} setMovieForBanner={setMovieForBanner}/>
          <Row title="Trending Now" fetchUrl={requests.requestTrending} movieForBanner={movieForBanner} setMovieForBanner={setMovieForBanner}/>
          <Row title="Popular Movies" fetchUrl={requests.requestPopularMovies} movieForBanner={movieForBanner} setMovieForBanner={setMovieForBanner}/>

          <Row title="Comedy Movies" fetchUrl={requests.requestComedyMovies} movieForBanner={movieForBanner} setMovieForBanner={setMovieForBanner}/>
          <Row title="Action Movies" fetchUrl={requests.requestActionMovies} movieForBanner={movieForBanner} setMovieForBanner={setMovieForBanner}/>
          <Row title="Horror Movies" fetchUrl={requests.requestHorrorMovies} movieForBanner={movieForBanner} setMovieForBanner={setMovieForBanner}/>
          <Row title="Romance Movies" fetchUrl={requests.requestRomanceMovies} movieForBanner={movieForBanner} setMovieForBanner={setMovieForBanner}/>
          <Row title="Documentaries" fetchUrl={requests.requestDocumentaries} movieForBanner={movieForBanner} setMovieForBanner={setMovieForBanner}/>
        </>

      }
      

    </div>
  )
}
export default MoviesHomeScreen
// <Banner fetchUrl={requests.requestClickedMovie(movieId)}/> 
