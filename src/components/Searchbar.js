import React, {useState} from 'react';
import MovieCard from './MovieCard.js';

function Searchbar() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=a9be2edf3670470c33f05555ebb070b4&language=en-US&query=${query}&page=1&include_adult=true`;
  
    try {
      const res = await fetch(url);
      const data  = await res.json();
      setMovies(data.results);
    } catch(err) {
        console.error(err);
    }
    
  }

  return (
    <div>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">Movie Name</label>
        <input className="input" 
          type="text" 
          name="query" 
          placeholder="i.e. John Wick" 
          value={query}
          onChange={ e => { setQuery(e.target.value) } }  
        />
        <button className="button" type="submit">Submit</button>
      </form>   
      <div className="card-list"> 
        {movies.filter(movie => movie.poster_path).map(movie => (
          <MovieCard movie={movie}  key={movie.id} />
        ))}
      </div> 
    </div>
  )
}

export default Searchbar;