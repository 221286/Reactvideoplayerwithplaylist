import { Fullscreen,  } from "../Functions/Screensize";
import Volumecontainer from "./Volumecontainer";
import { MdFullscreen,MdFullscreenExit } from "react-icons/md";
import { FaPlay,FaPause } from "react-icons/fa";
import { setTimerformat } from "../Functions/Timerfunctions";
import { handleButtonClick } from "../Functions/handlebuttonclick";
import Toggle from "../Functions/Toggle";
import { playbackspeeder } from "../Functions/playbackspeed";
import Seekvideo from "./Seekvideo";




const Videocontrollers =({setscreen,video,videocontainer,isplaying,volume,setvolume
    ,currentTime,videoDuration,screen,setisplaying,playbackspeed,setplaybackspeed})=>{
    
    
      
    return (<div className={"video-controllers "} onClick={handleButtonClick}>
       {<Seekvideo video={video}></Seekvideo>
}
        <div className="controller-features ">
        <button className="play-pause" onClick={() => Toggle(video, isplaying, setisplaying)}> {!isplaying?(<FaPlay className="play" />):(<FaPause className="pause" />)}</button>
        <Volumecontainer video={video} volume={volume} setvolume={setvolume} ></Volumecontainer>
        <button onClick={()=>{Fullscreen(videocontainer,setscreen)}} className="full-icon">{screen===" fullscreen"?<MdFullscreenExit />:<MdFullscreen />}
        </button>
        
<button onClick={()=>{playbackspeeder(video,playbackspeed,setplaybackspeed)}}>{playbackspeed}X</button>
        <span className="showTimer">{setTimerformat(currentTime)+" | "+setTimerformat(videoDuration)}</span>
        
        </div>
        

    </div>)
}
export default Videocontrollers;