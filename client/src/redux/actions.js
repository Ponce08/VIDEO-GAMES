import { ALL_GAMES, GAME_BY_ID, GET_GENEROS, POST_GAME } from "./action-types";
import axios from "axios";

export const getAllGames = (page)=>{

    return async(dispatch)=>{
        try {
            const { data } = await axios.get(`http://localhost:3001/videogames/page_${page}`);

            return dispatch({
                type:ALL_GAMES,
                payload: data
            })
            
        } catch (error) {
            throw Error(error.message)
        }
    }
};

export const getById = (id)=>{

    return async(dispatch)=>{
        try {
            const { data } = await axios.get(`http://localhost:3001/videogames/${id}`);

            return dispatch({
                type:GAME_BY_ID,
                payload: data
            })
        } catch (error) {
            throw Error(error.message)
        }
    }
};


export const postNewGame = (gameData)=>{
    
    return async(dispatch)=>{
        try {
               const { data } = await axios.post('http://localhost:3001/videogames/post_game', gameData);
    
                return dispatch({
                    type:POST_GAME,
                    payload: data
                })
        } catch (error) {
            throw Error(error.message)
        }
    }
};

export const getGeneros = ()=>{

    return async(dispatch)=>{
        try {
                 const { data } = await axios.get('http://localhost:3001/videogames/genres');
            
                return dispatch({
                    type:GET_GENEROS,
                    payload: data
                })
            
        } catch (error) {
            throw Error(error.message)
        }
    }
}