import { MainContainer, Image, Title } from "./langingPageStyles/langingPageStyles";
const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/25.png";
export default function LandingPage() {
    return(
        <MainContainer>
            <Title>Bienvenido a PokeAPI</Title>
            <Image src={url} alt="pikachu" />
        </MainContainer>
    );
};