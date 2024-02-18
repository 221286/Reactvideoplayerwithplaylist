import React from 'react'
import { playvideos } from '../Data/Videosdata'

const Videocontainer = ({Title,index,setvideo,setimages}) => {
  return (
    <div className='video-list' onClick={()=>{setvideo(playvideos[index].videoURL);
    setimages(playvideos[index].images)}} >
        <h2>{Title}</h2>
      
    </div>
  )
}

export default Videocontainer;