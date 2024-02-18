import React, { useEffect, useState } from 'react'

const Seekvideo = ({video}) => {
    const [showTime,setshowTime]=useState(0);
    useEffect(() => {
        const updateShowTime = () => {
          if (video.current) {
            setshowTime(video.current.currentTime);
          }
        };
    
        // Add event listener for the timeupdate event
        video.current.addEventListener('timeupdate', updateShowTime);
    
        // Clean up event listener
        return () => {
          video.current.removeEventListener('timeupdate', updateShowTime);
        };
      }, [video]);
  return (
    <div className='video-seeker'>
      <input type="range" min="0" max="100" step="any" value={showTime} 
      onChange={(e)=>{ const seektime=parseFloat(e.target.value);
      video.current.currentTime=seektime;
      setshowTime(seektime)}}/>
    </div>
  )
}

export default Seekvideo;
