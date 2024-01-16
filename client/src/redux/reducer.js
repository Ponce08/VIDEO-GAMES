import { ALL_GAMES, GAME_BY_GENERO, GAME_BY_ID, GAME_BY_NAME, GET_GENEROS, ORDER, POST_GAME, STATE_NULL } from "./action-types"

const initialState = {
    allGames:[],
    gameID:{},
    postGames:[],
    generos:[],
    gamesNames:[]
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

        case STATE_NULL:
            return {
                ...state,
                gameID:action.payload
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
            };
            
        case GAME_BY_NAME:
            return {
                ...state,
                gamesNames:action.payload
            };

        case ORDER:
            if(action.payload === "De la A-Z"){
                const gamesOrdered_AZ = state.allGames.sort((a, b)=>{ 
                    if(a.name < b.name)
                    {return -1}
                });
                return {
                    ...state,
                    allGames: gamesOrdered_AZ
                }
            };

            if(action.payload === "Menor Rating" ){
                const gamesOrdered_rating = state.allGames.sort((a, b)=> a.rating - b.rating)
                return{
                    ...state,
                    allGames: gamesOrdered_rating
                }
            };

            if(action.payload === "Mayor Rating" ){
                const gamesOrdered_rating = state.allGames.sort((a, b)=> b.rating - a.rating)
                return{
                    ...state,
                    allGames: gamesOrdered_rating
                }
            };

        case GAME_BY_GENERO:
                let arrayGamesGeneros = [];
                let stateGames = state.allGames
                for (let i = 0; i < stateGames.length; i++) {
                    for (let j = 0; j < stateGames[i].genres.length; j++) {
                    if(stateGames[i].genres[j].name === action.payload){
                        arrayGamesGeneros.push(stateGames[i])
                    }
                }
            }
            return {
                ...state,
                gamesNames:arrayGamesGeneros
            }
   
        default:
            return{
                ...state
            }
    }
}

export default reducer;