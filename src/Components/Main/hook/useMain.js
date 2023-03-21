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
        e.preventDefault();
        if(name){
            setLoading(true);
            setTimeout(() => {
                axios.get("https://pokeapi.co/api/v2/pokemon/"+name.toLowerCase())
                .then(res => {
                    const data = res.data;
                    setPokemon(data);
                })
                .catch(()=>{
                    alert("No se encontro un pokemon con ese nombre");
                    setPokemon({});
                })
                .finally(() => {
                    setLoading(false);
                    setName("");
                });
            }, 1000);
        }
    };

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1281")
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(err))
    }, []);

    return { pokemon, name, loading, handleChange, handleClick, pokemons };
};