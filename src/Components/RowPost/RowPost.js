import React, { useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'

import { API_KEY, imageUrl } from '../../Constants/Constants'
import YouTube from 'react-youtube'

function RowPost(props) {
  const [orginal,setOrginal]=useState([])
  const [trailorUrl,setTrailorUrl]=useState('')
  
    useEffect(()=>{
    axios.get(props.url).then((response)=>{
      // console.log(response.data.results);
      setOrginal(response.data.results)
    })
    

  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  }

    function manageMovie(id){
      console.log(id);
      axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en`).then((response)=>{
        if (response.data.results.length!==0) {
          setTrailorUrl(response.data.results[0])
          console.log(trailorUrl.key);
          
        }else{
          console.log('array empty');
        }
      })
      

    }
 

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      
      <div className='posters'>
        {
          orginal.map((obj)=>
            <img onClick={()=>{manageMovie(obj.id)}} src={`${imageUrl+obj.backdrop_path}`} alt="poster" className={props.isSmall?'smallposter':'poster'} />
          )
        }
     
        
          
        
      </div>
      <div className='youtube'>
        {trailorUrl && <YouTube opts={opts} videoId={trailorUrl.key}></YouTube>}
      </div>
      
    </div>
  )
       }

export default RowPost
