// import logo from './logo.svg';
import './App.css';
import MovieList from './components/movieList';
import NavigationBar from './components/navigation';
import { useState,useEffect } from 'react';
import { getCategory, getMovies } from './utils/utilities';
import Categories from './components/categories';


function MoviesApp ({movies,loading,category,setCategory}){
  const [search,setSearch] = useState("")
 return (

  <div>
    <NavigationBar searchNav={search}setSearch={setSearch} />
    <Categories category ={category} setCategory={setCategory}/><br/><br/>
    <MovieList search ={search} movies={movies} loading = {loading} />

  
  </div>
 );
}

function App() {
  const [movies,setMovies] = useState([])
  const [loading,setLoading] = useState(false)
  const [category,setCategory] = useState("")

  useEffect(()=>{
      (async()=>{
          setLoading(true)
          if(category){
            const movies = await getCategory(category)
            console.log(movies)
            setMovies(movies.results)
          }else{
            const movies = await getMovies()
            setMovies(movies.results)
       
          }
          setLoading(false)
  
     
          console.log({movies})
      })();
  },[category])
  if(loading ){
      return <h1>Loading...</h1>
  
  }
return(
  <MoviesApp movies = {movies} loading = {loading} category = {category} setCategory = {setCategory}/>
)
}

export default App;
