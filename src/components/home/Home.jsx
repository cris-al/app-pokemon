import axios from "axios";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../../store/actions/actions";
import Skeleton from '@mui/material/Skeleton';
import { teal, grey } from '@mui/material/colors';

export default function Home(){
    // const [pokemons, setPokemons] = useState([]);
    let pokemon = useSelector(state => state.pokemon.pokemon);
    // const [pokemon, setPokemon] = useState({
    //     name: '',
    //     image: ''
    // });
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    function handleClick(){
        dispatch(getPokemon(input));
        setInput('');
        // axios('https://pokeapi.co/api/v2/pokemon/'+input)
        // .then(res => setPokemon({
        //     name: res.data.name,
        //     image: res.data.sprites.other.home.front_default
        // })).catch((e)=>console.log(e));
    }
    // console.log("Aqui: ",pokemon);

    return(
        <div>
            <h1>Welcome</h1>
            <div>
                <label>Search pokemon</label>
                <input type="text" value={input}
                onChange={(e)=>setInput(e.target.value)}/>
                <button onClick={handleClick}>Search</button>
            </div>
            {pokemon.name?
                <div>
                <h3>{pokemon.name}</h3>
                <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
                </div>:
                <>
                    <Skeleton variant="text" sx={{ fontSize: '1rem', width: '200px', backgroundColor: grey[600] }} />
                    <Skeleton variant="rectangular" width={210} height={118} 
                        sx={{ backgroundColor: grey[600] }}/>
                </>
            }
            
        </div>
    )
}