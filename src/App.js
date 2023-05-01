import './App.css';
import AllMovies from './components/AllMovies/AllMovies.js';
import SingleMovie from './components/SingleMovie/SingleMovie.js';
import Navbar from './components/Navbar/Navbar.js';
import { useState } from 'react';

function App() {
  const [movieId, setMovieId] = useState("");
  const [currentPage, setCurrentPage] = useState("AllMovies");

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage}/>
      { currentPage == "AllMovies" && <AllMovies setMovieId={setMovieId} setCurrentPage={setCurrentPage} /> }
      { currentPage == "SingleMovie" && <SingleMovie movieId={movieId} /> }
    </div>   
  );
}

export default App;