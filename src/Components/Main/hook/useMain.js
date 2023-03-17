import axios from "axios";
import { useEffect, useState } from "react";

export const useMain = () => {
    const [name, setName] = useState("");
    const [pokemon, setPokemon] = useState();
    const [pokemons, setPokemons] = useState();
    const [loading, setLoading] = useState(false);

    function handleChange(e) {
        setName(e.target.value);
    };

    function handleClick(e) {
        setLoading(true);
        e.preventDefault();
        axios.get("https://pokeapi.co/api/v2/pokemon/"+name.toLowerCase())
        .then(res => {
            const data = res.data;
            setPokemon(data);
        })
        .catch(error=>console.log(error))
        .finally(() => {
            setLoading(false);
            setName("");
        });
        
    };

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1281")
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(err))
    }, []);

    return { pokemon, name, loading, handleChange, handleClick, pokemons };
};