import { Link } from 'react-router-dom';
import './games.css';

const Games = ({id, name, image, genres})=>{
    return(
        <div className="content_game">
            <h3 className='titulo_game'>{name}</h3>
            <Link to={`/detail/${id}`}>
            <img src={image} alt={name} className="image_game"/>
            </Link>
            <div className='content_titulo_genres'>
                <span className='titulo_genres'>GENRES: {genres}</span>
            </div>
        </div>
    )
};

export default Games;