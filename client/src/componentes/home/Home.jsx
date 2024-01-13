import { useSelector, useDispatch } from "react-redux";
import { getAllGames } from "../../redux/actions";
import { useEffect, useState } from "react";
import Games from "../games/Games";
import './home.css';
import Navegation from "../navegation/Navegation";

const Home =()=>{

    const [inicio, setInicio] = useState(0);
    const [final, setFinal] = useState(15);

    const { allGames } = useSelector((state)=>state);
    const dispatch = useDispatch();

// Control Paginado
    let gamesAll = allGames.slice(inicio, final);

    const previous_page = ()=>{
        if(inicio > 0){
            setInicio(inicio - 15);
            setFinal(final - 15);
            gamesAll = allGames.slice(inicio, final);
        }
    };

    const next_page = ()=>{
        if(final < 105){
            setInicio(inicio + 15);
            setFinal(final + 15);
            gamesAll = allGames.slice(inicio, final);
        }
    };
    
    useEffect(()=>{
        dispatch(getAllGames())
    }, [inicio, final])

    return(
        <div>
                <Navegation/>
                <div className="content_games">
                {
                    gamesAll.map((game)=>{
                        return <Games
                            key={game.id}
                            id={game.id}
                            name={game.name}
                            image={game.image}
                            genres={game.genres?.map((genre)=>{return <h4 key={genre.id} className="genres_item">*{genre.name}</h4>})}
                        />
                    })
                }
                    <div className="cont_button">
                        <button className='button_home' onClick={previous_page}>PREV</button>  <button className='button_home' onClick={next_page}>NEXT</button>
                    </div>
                </div>
        </div>
    )
};

export default Home;