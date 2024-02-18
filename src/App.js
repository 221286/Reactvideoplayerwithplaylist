import './App.css';
import Videoplayer from './videoplayer/Videoplayer';
import { playvideos } from './Data/Videosdata';
import Videocontainer from './Videocontainer/Videocontainer';
import { useState } from 'react';


function App() {
  const [getvideo,setvideo]=useState(playvideos[0].videoURL);
  const [getimages,setimages]=useState(playvideos[0].images);
  
  return (
    <div className="App">
      
      <Videoplayer getvideo={getvideo} getimages={getimages}></Videoplayer>
      
      <div className='lists-conatiner'>
        <h1 className='PlayList-Header'>PlayList</h1>
      {     playvideos.map((vid,index)=><Videocontainer key={vid.id} setvideo={setvideo} setimages={setimages} index={index} Title={vid.Title}></Videocontainer>)     }
      
      </div>
      

    </div>
  );
}

export default App;
