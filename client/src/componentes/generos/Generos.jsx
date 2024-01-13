import './generos.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getGeneros } from '../../redux/actions';


const Generos = ()=>{

    const { generos, allgames } = useSelector((state)=>state);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getGeneros())
    }, []);

    
    // const onSearchGameByGenero = (genero)=>{
    //     let gamesFilter = [];
        
    //         for (let i = 0; i < allgames.length; i++) {
    //             for (let j = 0; j < allgames[i].genres.length; j++) {
       
            
    //     }
        
    //    }
        
    // }

    return(
        <div>
            {generos.map((genero)=>{return <button>{genero}</button> })}
        </div>
    )
};

export default Generos;