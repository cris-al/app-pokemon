import { GET_POKEMON } from "../actions/actions";

const initialState = {
    pokemons: [],
    detail: {}
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case GET_POKEMON: 
            return{
                ...state,
                pokemons: [...state.pokemons, action.payload]
            }

        default:
            return state
    }
}