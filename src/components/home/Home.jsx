import axios from "axios";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../../store/actions/actions";
import Skeleton from '@mui/material/Skeleton';
import { grey, lightGreen, blue } from '@mui/material/colors';
import {TextField, IconButton, Box} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import Card from '../card/Card';

const CustomTextField = styled(TextField)({
    // '& label.Mui-focused': {
    //   color: lightGreen['A700'],
    // },
    // '& .MuiInput-underline:after': {
    //   borderBottomColor: lightGreen[500],
    // },
    '& .MuiInput-underline:before': {
        borderBottomColor: lightGreen[500],
      },
    '& .MuiOutlinedInput-root': {
    //   '& fieldset': {
    //     borderBottomColor: lightGreen[500],
    //   },
    //   '&:hover fieldset': {
    //     borderColor: lightGreen[400],
    //   },
    //   '&.Mui-focused fieldset': {
    //     borderColor: lightGreen['A700'],
    //   },
    //   '&.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root': {
    //     color: grey[300]
    //   }
    },
});

export default function Home(){
    // const [pokemons, setPokemons] = useState([]);
    let pokemons = useSelector(state => state.pokemon.pokemons);
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
    // console.log("Aqui: ",pokemons);

    return(
        <div>
            <h1>Welcome</h1>
            <div>
                <label>Search pokemon</label>
                {/* <TextField id="standard-basic" label="Standard" variant="standard" 
                name='name' value={input}
                onChange={(e)=>setInput(e.target.value)}/> */}
                <CustomTextField label="Name" id="custom-css-outlined-input"
                    variant="standard" name='name' value={input}
                    // InputLabelProps={{style:{color: grey[300]}}}
                    // InputProps={{style:{color: grey[300]}}}
                    onChange={(e)=>setInput(e.target.value)}/>
                <IconButton
                onClick={handleClick}
                sx={{ 
                    backgroundColor:'#1e88e5',
                    transition: '1s',
                    ':hover':{backgroundColor:'#1565c0', color: '#eeeeee'}
                }}>
                    <SearchIcon/>
                </IconButton>
                {/* <input type="text" value={input}
                onChange={(e)=>setInput(e.target.value)}/>
                <button onClick={handleClick}>Search</button> */}
            </div>
            <Box component='div' display='flex' flexWrap='wrap'>
            {pokemons[0]?pokemons.map(el=>
                <Card name={el.name} image={el.sprites.other.home.front_default}/>
            )
                // <Card name={pokemon.name} image={pokemon.sprites.other.home.front_default}/>
                // <div>
                // <h3>{pokemon.name}</h3>
                // <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
                // </div>
                :
                <>
                    <Skeleton variant="text" sx={{ fontSize: '1rem', width: '200px', backgroundColor: grey[600] }} />
                    <Skeleton variant="rectangular" width={210} height={118} 
                        sx={{ backgroundColor: grey[600] }}/>
                </>
            }
            </Box>
        </div>
    )
}