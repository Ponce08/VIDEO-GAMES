import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navegation from '../navegation/Navegation';
import './buscarGame.css'
import Games from '../games/Games';
import { gamesByGeneros, getGameByName, getGeneros } from '../../redux/actions';
import { Link } from 'react-router-dom';


const BuscarGame = ()=>{

    const [gameName, setGameName] = useState('');

    const { gamesNames, generos } = useSelector((state)=>state);
    const dispatch = useDispatch();

    let gamesfind = gamesNames.slice(0, 15);

    const handleChange = (event)=>{
        setGameName(event.target.value)
    };

    const handleChange2 = (event)=>{
        dispatch(gamesByGeneros(event.target.value))
    };

    useEffect(()=>{
        dispatch(getGeneros())
    }, []);

    return(
        <div>
            <Navegation
                input_search={<div className='content_filtros2'>
                                <div className='content_search_genres'>
                                    <div className='content_search2'>
                                        <button className='button2_nav' onClick={()=>dispatch(getGameByName(gameName))}>Search🔍</button>
                                        <input className='imput_nav' type="search" name='name' value={gameName} onChange={handleChange}/>
                                        <Link to={'/home'}><button className='button_nav_home'>Home</button></Link>
                                    </div>
                                    <div>
                                        <label className='label_nav'>Generos</label>
                                        <select  className='select_nav' onChange={handleChange2}>
                                            {generos.map((genero)=>{return  <option value={genero.name} >{genero.name}</option>})}
                                        </select>
                                    </div>
                                </div>
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