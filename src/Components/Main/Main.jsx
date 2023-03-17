import Card from "Components/Card/Card";
import Search from "Components/Search/Search";
import { useMain } from "./hook/useMain";
import { MainContainer, Container, MessageContainer, Icon,
    Paragraph } from "./mainStyles/mainStyles";
import Arrowtop from "assets/arrowtop-icon.svg";

export default function Main() {
    const { name, pokemon, loading, handleChange, handleClick, pokemons } = useMain();
    return(
        <MainContainer>
            <Container>
                <Search name={name} handleChange={handleChange} pokemons={pokemons}
                    handleClick={handleClick} loading={loading}/>
                { pokemon ? <Card pokemon={pokemon}/>
                          : <MessageContainer>
                                <Icon src={Arrowtop} alt="icono arrow"/>
                                <Paragraph>Ingrese el nombre de un Pokemon</Paragraph>
                            </MessageContainer> }
                
            </Container>
        </MainContainer>
    );
};