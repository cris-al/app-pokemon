import { CardContainer } from "../../cardStyles/cardStyles";
import { SkeletonImage, SkeletonParagraph, Div } from "./styles/skeletonStyles";

export default function Skeleton() {
    return(
        <CardContainer>
            <SkeletonImage />
            <Div>
                { [1,2,3,4,5,6,7].map(el => <SkeletonParagraph key={el}/>)}
            </Div>
        </CardContainer>
    );
};