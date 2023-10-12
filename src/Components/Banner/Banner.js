import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../Constants/Constants'

function Banner() {
  const [movie,setMovie]=useState({})
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results);
      setMovie(response.data.results[8])
    })
    

  },[])

  
  return (
    <div
     style={{background:`URL(${movie?imageUrl+movie.backdrop_path:null})`}}
     className='banner'>
        <div className='content'>
          
            <div className='title'>{movie?movie.name:null}</div>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <div className='banner-descripiton'>
                <h1 className='description'>{movie?movie.overview:null}</h1>
            </div>
        </div>
        <div className='fade'></div>
      
    </div>
  )
}

export default Banner
