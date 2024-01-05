import { useState } from 'react'
import './App.css'
import video_fondo from './video_fondo.mp4'

const App =()=> {
  return (
    <div className='content_app'>
      <div className='titulo'>
        <h1>Welcome to Ponce_Games</h1>
        <button>START</button>
      </div>
      <div>
        <video src={video_fondo} muted autoPlay loop type='video/mp4'></video>
      </div>
    
    </div>
  )
}

export default App
