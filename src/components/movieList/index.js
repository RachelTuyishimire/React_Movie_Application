import React, { useState } from "react";
import ImageContainer from "../../atoms/imageContainer";
import './style.css';

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

const MovieList = ({ search, movies, loading }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()));

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="movie-list-container">
      {loading ? (
        <p>Loading...</p>
      ) : movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        <div className="container">
          
          {filteredMovies.map(item => (
            <div key={item.id} onClick={() => handleMovieClick(item)}>
              <ImageContainer props={item} />
             
              
              
            </div>
    
          ))}
          
        </div>
      )}
      

      {selectedMovie && (
        <div className="single-detail">
          <div className="single-detail-content">
            <span className="closing" onClick={() => setSelectedMovie(null)}>X</span>
            <img src={`${IMAGE_BASE_URL}${selectedMovie.poster_path}`} alt={selectedMovie.title} />
            <h2>{selectedMovie.title}</h2>
            <p>{selectedMovie.overview}</p>
            <p>Released {selectedMovie.release_date}</p>
            <button>WATCH NOW</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieList;
