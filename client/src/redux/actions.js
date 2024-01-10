import { ALL_GAMES, GAME_BY_ID } from "./action-types";
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
