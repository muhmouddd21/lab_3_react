import Search from "./Search"
import MoviesSection from "./MoviesSection"
import { useEffect,useReducer } from "react"
import axios from "axios";
import NavBar from "./NavBar";
  const initialState = {movies:[],error:null,loading:true,searchedMovies:""};

    function reducer(state,action){
        const type = action.type;

        switch(type){
            case "ch-loading":{
                return {...state,loading:action.payload};
            }
            case "load-movies":{
                return {...state,movies:action.payload};
            }
            case "add-error":{
                return {...state, error:action.payload};
            }
            case "searched-movies":{
                return {...state,searchedMovies:action.payload};
            }
            default:
                return state;

        }
    };




export default function MainSection(){
        const [state,dispatch] = useReducer(reducer,initialState)


    useEffect(()=>{
        async function fetchMovies(){
            try {

                dispatch({type:"ch-loading", payload: true });
                const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=bef30e466c56435f1bd2c50368bdbe7e`);

                dispatch({type:"load-movies",payload:response.data.results});
            } catch (error) {
                console.error("there is an error",error);
                dispatch({type:"add-error",payload:error})
            }finally{
                dispatch({type:"ch-loading", payload: false });
            }
        }
        fetchMovies(); 
    },[]);
        const filteredMovies = state.movies.filter((movie) =>
        movie.title.toLowerCase().startsWith(state.searchedMovies.toLowerCase())
        );

    
    return (
        <>
        <NavBar></NavBar>
        <Search onSearchChange ={(text)=> dispatch({type:"searched-movies",payload:text})}/>
        <MoviesSection movies={filteredMovies} loading={state.loading} error={state.error}/>
        </>
    )
}