import { useSelector, useDispatch } from "react-redux";
import { getAllGames, order } from "../../redux/actions";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Games from "../games/Games";
import './home.css';
import Navegation from "../navegation/Navegation";


const Home =()=>{

    const { allGames } = useSelector((state)=>state);
    const dispatch = useDispatch();

// Control Paginado

    const [inicio, setInicio] = useState(0);
    const [final, setFinal] = useState(15);
    const [numeberPage, setNumberPage] = useState(1);
    const [numeberPage2, setNumberPage2] = useState(2);


let gamesAll = allGames.slice(inicio, final)
    const previous_page = ()=>{
            if(inicio > 0){
                setInicio(inicio - 15);
                setFinal(final - 15);
                setNumberPage2(numeberPage2 - 1)
                setNumberPage(numeberPage - 1)
                gamesAll = allGames.slice(inicio, final);
            }
        };

        const next_page = ()=>{
            if(final < 105){
                setInicio(inicio + 15);
                setFinal(final + 15);
                setNumberPage2(numeberPage2 + 1)
                setNumberPage(numeberPage + 1)
                gamesAll = allGames.slice(inicio, final);
            }
        };
     
    useEffect(()=>{
        dispatch(getAllGames())
    }, []);

    const handleOrder = (event)=>{
        dispatch(order(event.target.value))
      };

    return(
        <div>
                <Navegation
                    crear_juego={ <Link to={'/crear_juego'}>
                                    <button className='button_nav'>Crear Juego</button>
                                  </Link>}
                    ordenar={      <div className='content_filtros'>
                                    <label className='label_nav'>Ordenar</label>
                                        <select className='select_nav' onChange={handleOrder}>
                                            <option value=""></option>
                                            <option value="Mayor Rating">Mayor Rating</option>
                                            <option value="Menor Rating">Menor Rating</option>
                                            <option value="De la A-Z">De la A-Z</option>
                                        </select>
                                    </div>}
                    buscar_juego={  <Link to={'/buscar_juego'}>
                                        <button className='button_nav'>Buscar Juego🔍</button>
                                    </Link>}
                />
                <div className="content_games">
                {
                    gamesAll.map((game)=>{
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
                    <div className="cont_button">
                        <button className='button_home' onClick={previous_page}>{numeberPage}</button> <button className='button_home' onClick={next_page}>{numeberPage2}</button>
                     
                    </div>
                </div>
        </div>
    )
};

export default Home;