import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navegation from '../navegation/Navegation';
import './buscarGame.css'
import Games from '../games/Games';
import { getGameByName } from '../../redux/actions';
import { Link } from 'react-router-dom';


const BuscarGame = ()=>{

    const [gameName, setGameName] = useState('');
    const { gamesNames } = useSelector((state)=>state);
    const dispatch = useDispatch();

    let gamesfind = gamesNames.slice(0, 15);

    const handleChange = (event)=>{
        setGameName(event.target.value)
    };

    return(
        <div>
            <Navegation
                input_search={<div className='content_filtros'>
                                <button className='button2_nav' onClick={()=>dispatch(getGameByName(gameName))}>Search🔍</button>
                                <input className='imput_nav' type="search" name='name' value={gameName} onChange={handleChange}/>
                                <Link to={'/home'}><button className='button_nav_home'>Home</button></Link>
                            </div>}
            />
            <div className='content_games'>
                {
                    gamesfind.map((game)=>{
                        return <Games
                            key={game.id}
                            id={game.id}
                            name={game.name}
                            image={game.image}
                            genres={game.genres?.map((genre)=>{return <h4 key={genre.id} className="genres_item">*{genre.name}</h4>})}
                            rating={game.rating}
                        />
                    })
                }
            </div>
        </div>
    )
};

export default BuscarGame;