export function playbackspeeder (video,speed,setspeed){

    let newspeed =parseFloat(speed+0.25);
    if(newspeed>3.0){
        newspeed=1;
        
    } 
    video.current.playbackRate=newspeed;
    setspeed(newspeed);
    
}

export function playbackspeederdecrease (video,speed,setspeed){

    let newspeed =parseFloat(speed-0.25);
    if(newspeed<-3.0){
        newspeed=1;
        
    } 
    video.current.playbackRate=newspeed;
    setspeed(newspeed);
    
}