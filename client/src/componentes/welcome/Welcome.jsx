import video_fondo from './video_fondo.mp4';
import './welcome.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Welcome =()=>{

    const añadirGenerosBDD = async()=>{
        try {
            await axios.get('http://localhost:3001/videogames/genres_post')
        } catch (error) {
            throw Error(error.message)
        }
    }

    return(
        <div className='content_welcome'>
            <div className='content_titulo'>
                <h1 className='titulo'>Welcome to Ponce_Games</h1>
                <Link to={'/home'}>
                <button className='button_welcome' onClick={añadirGenerosBDD}>START</button>
                </Link>
            </div>
            <div>
                <video src={video_fondo} muted autoPlay loop type='video/mp4'></video>
            </div>
        </div>
    )
};

export default Welcome;