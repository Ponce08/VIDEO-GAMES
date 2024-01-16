import { ALL_GAMES, GAME_BY_GENERO, GAME_BY_ID, GAME_BY_NAME, GET_GENEROS, ORDER, POST_GAME, STATE_NULL } from "./action-types";
import axios from "axios";

export const getAllGames = ()=>{

    return async(dispatch)=>{
        try {
            const { data } = await axios.get('http://localhost:3001/videogames');

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
};

export const getGameByName = (name)=>{

    return async(dispatch)=>{
        try {
                 const { data } = await axios.get(`http://localhost:3001/videogames?name=${name}`);
            
                return dispatch({
                    type:GAME_BY_NAME,
                    payload: data
                })
            
        } catch (error) {
            alert(`¡No hay juegos con nombre: ${name}!`)

        }
    }
};

export const stateNull = ()=>{
    return (dispatch)=>{
        return dispatch({
            type:STATE_NULL,
            payload:{}
        })
    }
};

export const order = (orderName)=>{
    return { type: ORDER, payload:orderName }

};

export const gamesByGeneros = (genero)=>{
    return { type: GAME_BY_GENERO, payload:genero }
    
}
