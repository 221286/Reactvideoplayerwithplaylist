export function Togglemute (vid,vol,volume){
    const newVolume = volume === 0 ? 1 : 0;
    vol(newVolume);
    vid.current.volume = newVolume;
   
    

}