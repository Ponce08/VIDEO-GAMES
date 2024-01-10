import { useSelector, useDispatch } from "react-redux";
import { getAllGames } from "../../redux/actions";
import { useEffect, useState } from "react";
import Games from "../games/Games";
import './home.css';
import Navegation from "../navegation/Navegation";

const Home =()=>{

    const [page, setPage] = useState(1)
    const { allGames } = useSelector((state)=>state);
    const dispatch = useDispatch();

// Control Paginado
    const previous_page = ()=>{
        if(page > 1){
            setPage(page - 1)
        }
    };

    const next_page = ()=>{
        if(page < 7){
            setPage(page + 1)
        }
    };
    
    useEffect(()=>{
        dispatch(getAllGames(page))
    }, [page])

    return(
        <div>
                <Navegation/>
                <div className="content_games">
                {
                    allGames.map((game)=>{
                        return <Games
                            key={game.id}
                            id={game.id}
                            name={game.name}
                            image={game.image}
                            genres={game.genres?.map((genre)=>{return <h4 key={genre.id} className="genres_item">*{genre.name}</h4>})}
                        />
                    })
                }
                    <div className="content_button">
                        <button className='button_home' onClick={previous_page}>PREV</button>  <button className='button_home' onClick={next_page}>NEXT</button>
                    </div>
                </div>
        </div>
    )
};

export default Home;