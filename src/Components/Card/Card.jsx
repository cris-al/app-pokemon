import { CardContainer, CardTitle, Image, Div1, Div2, Content,
    Label, ContStat } from "./cardStyles/cardStyles";
const colors = ["#2e7d32", "#ad1457", "#6a1b9a", "#0d47a1", "#bf360c", "#aeea00"]
export default function Card({pokemon}) {
    return(
        <CardContainer>
            <Image src={pokemon?.sprites?.other?.home?.front_default} alt={pokemon?.name}/>
            <Content>
                <CardTitle>{ pokemon?.name || "nada para mostrar" }</CardTitle>
                { pokemon ? pokemon.stats?.map((el, idx) => (
                    <ContStat key={el?.stat?.name}>
                        <Label>{el?.stat?.name}:</Label>
                        <Div1>
                            <Div2 val={el?.base_stat+"px"} col={colors[idx]} />
                        </Div1>
                    </ContStat>
                ))
                          : <p>No hay estadisticas</p> }
            </Content>
        </CardContainer>
    );
};