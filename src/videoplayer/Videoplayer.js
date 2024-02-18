import { useEffect, useRef, useState } from "react";

import Toggle from "../Functions/Toggle";
import Videocontrollers from "./Videocontrollers";
import { Fullscreen, Theatre, miniplayer } from "../Functions/Screensize";
import { Togglemute } from "../Functions/Volumefunctions";
import { playbackspeeder, playbackspeederdecrease } from "../Functions/playbackspeed";
const Videoplayer = ({getvideo,getimages})=>{
   const video = useRef();
   const videocontainer = useRef();
   const [screen,setscreen]=useState("");
   const [isplaying,setisplaying]=useState(true);
   const [currentTime,setcurrentTime]=useState(0);
    const [videoDuration,setvideoDuration]= useState(0);
    const [playbackspeed,setplaybackspeed]= useState(1);
    const [volume,setvolume]=useState(1)
    
    useEffect(()=>{
        document.addEventListener("keydown",e=>{
            const tags = document.activeElement.tagName.toLowerCase();
            if(tags==="input") return
            switch(e.key.toLowerCase()){
                
                
                case 'k':
                    if(tags==="button") return
                Toggle(video,isplaying,setisplaying)
                break;
                case "f":
                Fullscreen(videocontainer,setscreen);
                break;
                case "t":
                Theatre(setscreen);
                break;
                case "s":
                miniplayer(videocontainer,video);
                break;
                case "m":
                    Togglemute(video,setvolume,volume);
                    break;
                case "+":
                    playbackspeeder(video,playbackspeed,setplaybackspeed);
                    break;
                    case "-":
                        playbackspeederdecrease(video,playbackspeed,setplaybackspeed);
            }
    });
    
        
    },[][video ,isplaying, setscreen, setplaybackspeed, playbackspeed]);
    const setpause = isplaying ? "paused ":"";    
    return (<div ref={videocontainer} className={" video-container "+setpause +screen} 
    onClick={()=>{Toggle(video,isplaying,setisplaying)}} data-volume-level={"muted"}>
    
    <video src={getvideo}  ref={video} className="main-video "  
    onCanPlayThrough={()=>{setvideoDuration(video.current.duration)}} 
    onTimeUpdate={()=>{setcurrentTime(video.current.currentTime)}} 
    onEnded={()=>{setisplaying(false)}} onVolumeChange={()=>{
    }} poster={getimages} autoPlay  >
    </video>

    <Videocontrollers setscreen={setscreen} video={video} videocontainer={videocontainer} 
    isplaying={isplaying} screen={screen} setisplaying={setisplaying}
    currentTime={currentTime} videoDuration={videoDuration}  setplaybackspeed={setplaybackspeed} 
    playbackspeed={playbackspeed} volume={volume} setvolume={setvolume}>
    </Videocontrollers>
    
    </div>)

}

export default Videoplayer;