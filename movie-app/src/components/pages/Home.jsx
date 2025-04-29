import MovieCard from "../components/MovieCard";
import { useState } from 'react';

function Home(){

const [searchQuery, setSearchQuery] = useState('');

    const movies = [
       {id:1, title:"Movie1", release_date:"2020"},
       {id:1, title:"Movie2", release_date:"2020"},
       {id:1, title:"Movie3", release_date:"2020"},
       {id:1, title:"Movie4", release_date:"2020"},
   
    ];
    const handleSearch = (e) =>{
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery('--------');
    }
       return(
           <div className="Home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for a Movie" className="search-input" value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}/>
                <button type="submit" className="search-btn">Search</button>
            </form>
                <div className="movies-grid">
                    {movies.map((movie)=>(
                        movie.title.toLocaleLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id}/>
                    ))}
                </div>
           </div>
       )
   }

   export default Home;