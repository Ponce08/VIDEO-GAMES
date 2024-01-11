import { ALL_GAMES, GAME_BY_ID, GET_GENEROS, POST_GAME } from "./action-types"

const initialState = {
    allGames:[],
    gameID:{},
    postGames:[],
    generos:[]
}

const reducer =(state=initialState, action)=>{
    switch(action.type){
        case ALL_GAMES:
            return {
                ...state,
                allGames: action.payload
            };

        case GAME_BY_ID:
            return {
                ...state,
                gameID: action.payload
            };

            case POST_GAME:
                state.postGames.push(action.payload)
                return {
                    ...state,
                    postGames:[...state.postGames]
                };

            case GET_GENEROS:
                return {
                    ...state,
                    generos:action.payload
                }

        default:
            return{
                ...state
            }
            

    }
}

export default reducer;