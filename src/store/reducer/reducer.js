import { GET_POKEMON } from "../actions/actions";

const initialState = {
    pokemon: {},
    detail: {}
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case GET_POKEMON: 
            return{
                ...state,
                pokemon: action.payload
            }

        default:
            return state
    }
}