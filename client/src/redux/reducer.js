import { ALL_GAMES, GAME_BY_ID } from "./action-types"

const initialState = {
    allGames:[],
    gameID:{}
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

        default:
            return{
                ...state
            }
            

    }
}

export default reducer;