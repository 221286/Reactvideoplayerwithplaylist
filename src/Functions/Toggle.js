const Toggle = (vid,check,setcheck)=>{
    
    check ? vid.current.play() : vid.current.pause ();
    setcheck(!check);
    
    

}

export default Toggle;