import Search from "./Search"
import MoviesSection from "./MoviesSection"
import { useEffect, useState } from "react"
export default function MainSection(){

    const [movies,setMovies] = useState([]);
    const [error,setErrors] = useState(null);
    const [loading,setLoading] = useState(true);

    const [searchedMovies,SetSearchedMovies] = useState("");

    useEffect(()=>{
        async function fetchMovies(){
            try {
                setLoading(true);
                const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=bef30e466c56435f1bd2c50368bdbe7e`)
                if(!res.ok) throw new Error('there is Network error');
                const data = await res.json();
                setMovies(data.results);
            } catch (error) {
                console.error("there is an error",error);
                setErrors(error);
            }finally{
                setLoading(false);
            }
        }
        fetchMovies(); 
    },[]);

        const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().startsWith(searchedMovies.toLowerCase())
        );

    

    return (
        <>
        <Search onSearchChange ={SetSearchedMovies}/>
        <MoviesSection movies={filteredMovies} loading={loading} error={error}/>
        </>
    )
}