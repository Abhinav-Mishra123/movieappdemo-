import React from 'react'
import "./movielist.css"

const Movielist = (props) => {
  return (
    <>
    {props.movies.map((movie, index)=>(
        <div className="col-md-3 mainimg">
        <img src={movie.Poster} alt="movie" className='moveiimg'/>
        <p className='text-center'>{movie.Title}</p>
        <div className="overlay">   
            <div className='row'>
                <div className='col-md-12'>
                    <p className='fs-3'>Release:{movie.Year}</p>
                </div>
                {/* <div className='col-md-12'>
                    <p className='fs-3'>Duration:{movie.Runtime}</p>
                </div> */}
                

            </div>
        </div>
    
        </div>
    ))}
        </>
  )
}

export default Movielist