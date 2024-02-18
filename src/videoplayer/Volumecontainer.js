import React, { useState } from 'react';
import { FiVolumeX,FiVolume1,FiVolume2 } from "react-icons/fi";
import { Togglemute } from '../Functions/Volumefunctions';


const Volumecontainer = ({video,volume,setvolume}) => {
    
  return (
    <div className="volume-container">
    <button className="mute-btn" onClick={()=>{Togglemute(video,setvolume,volume)}} >
        {volume===0?(<FiVolumeX className='volume-muted-icon'/>):
        volume>0.5?(<FiVolume2 className='volume-high-icon'/>):(<FiVolume1 className='volume-low-icon'/>)}
        
        
        

          </button>
    <input className="volume-slider" type="range" min="0" max="1" step="any" value={volume} onChange={(event)=>{
       const newVolume = parseFloat(event.target.value);
       setvolume(newVolume);
       video.current.volume = newVolume;

    }}/>
  </div>
  )
}

export default Volumecontainer;
