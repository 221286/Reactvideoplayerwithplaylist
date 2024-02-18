//this function only support the click event and we need to handle the keyboard event too or else the permission is denied
/*export const Fullscreen = (screen,setscreen)=>{
    if(document.fullscreenElement===null){
        screen.current.requestFullscreen();
        setscreen(" fullscreen")
    } else {
        document.exitFullscreen();
        setscreen("");
    }
}*/
export const Fullscreen = (screen, setscreen) => {
    const element = screen.current;

    if (!document.fullscreenElement) {
// Create and dispatch a click event on the element
        const clickEvent = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        });
        element.dispatchEvent(clickEvent);

// If browser supports fullscreen, request it
        if (element.requestFullscreen) {
            element.requestFullscreen().then(() => {
                setscreen(" fullscreen");
            }).catch((err) => {
                console.error("Error attempting to enable full-screen mode:", err.message);
            });
        }
    } else {
        document.exitFullscreen();
        setscreen("");
    }
}


export const Theatre = (screen)=>{
    screen("theatre");
}



export const miniplayer= (screen,video)=>{
    if(screen.current.classList.contains("mini-player")){
        document.exitPictureInPicture();
        screen(" mini-player");
    }else{
        video.current.requestPictureInPicture();
    }
    
}