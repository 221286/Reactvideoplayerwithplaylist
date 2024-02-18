export function setTimerformat (duration){
    // const ONE_SECOND =60;
     const  SECOND= Math.floor(duration%60);
     const MINUTES= Math.floor(duration/60)%60;
     const HOUR = Math.floor(duration/3600);
     if(HOUR===0){
         return `${tenpad(MINUTES)}:${tenpad(SECOND)}`;
     } else {
         return `${tenpad(HOUR)}:${tenpad(MINUTES)}:${tenpad(SECOND)}`;
     }
     
 }
 
 function tenpad (time){
     if(time<10){
         return `0${time}`
     } else {
         return time
     }
 }