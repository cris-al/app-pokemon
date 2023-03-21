import { Input, Icon, Button, Container, LoadButton } from "./searchStyles/searchStyles";
import SearchIcon from "assets/search-icon.svg";

export default function Search({ name, handleChange, handleClick, loading, pokemons }) {
    return(
        <Container>
            <Input name="name" value={name} onChange={handleChange} list="pokemons"
                    placeholder="Escribe aquí..." />
            <datalist id="pokemons">
                { pokemons ? pokemons.map(el => <option value={el.name} key={el.name}></option>)
                           : <>
                                <option value="Mewtwo"></option>
                                <option value="Charizard"></option>
                                <option value="Charmander"></option>
                             </> }
            </datalist>
            <Button onClick={handleClick} disabled={loading}>
                { loading ? <LoadButton />
                          : <Icon src={SearchIcon} alt="icono"/> }
            </Button>
        </Container>
    );
};