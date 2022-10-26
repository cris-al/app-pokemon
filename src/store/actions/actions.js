import axios from "axios";

export const GET_POKEMON = 'GET_POKEMON';
export const GET_POKEMON_DETAIL = 'GET_POKEMON_DETAIL';

export const getPokemon = (name)=>{
    return function(dispatch){
        axios.get('https://pokeapi.co/api/v2/pokemon/'+name.toLowerCase())
                            .then(res => res.data)
                            .then(res => {
                                dispatch({
                                    type: GET_POKEMON,
                                    payload: res
                                })
                            });
    }
}

export const getPokemonDetail = ()=>{
    return {
        type: GET_POKEMON_DETAIL
    }
}