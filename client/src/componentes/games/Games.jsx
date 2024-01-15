import { Link } from 'react-router-dom';
import './games.css';

const Games = ({id, name, image, genres, rating})=>{
    return(
        <div className="content_game">
            <h3 className='titulo_game'>{name}</h3>
            <Link to={`/detail/${id}`}>
            <img src={image} alt={name} className="image_game"/>
            </Link>
            <div className='content_titulo_genres'>
                <span className='titulo_genres'>GENEROS: {genres}</span>
                <span className='titulo_genres'>Rating: <h4 className="rating_item">{rating}</h4></span>
            </div>
        </div>
    )
};

export default Games;