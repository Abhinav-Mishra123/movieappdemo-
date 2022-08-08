import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
import Movieheading from './components/Movieheading';
import Searchbox from './components/Searchbox';
import Movielist from './components/Movielist';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
const [movies, setMovies]=useState([]);
const [searchValue, setSearchValue] = useState("");

const getMoviesList = async (searchValue)=>{
  // const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=aeb2b829`;

  const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=32ab9537`;
  // const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e7e65475494b48c684cca756af9bf617`

  const response = await fetch(url);
  const responsejson = await response.json();


  if(responsejson.Search) {
    setMovies(responsejson.Search)
  }

}
useEffect(()=>{
  getMoviesList(searchValue);
}, [searchValue])



  return (
    <div className="container-fluid">
    <div className='row d-flex justify-content-center align-items-center'>
    <div className="col-md-6 col-sm-12">
<Movieheading heading ="MoviesList"/>
    </div>
    <div className="col-md-6 col-sm-12">
      <Searchbox searchValue = {searchValue} setSearchValue = {setSearchValue}/>
    </div>
    </div>
    <div className="row mt-3">
      <Movielist
        movies = {movies}
      />
    </div>
    </div>
  );
}

export default App;
