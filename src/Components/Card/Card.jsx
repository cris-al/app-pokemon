import ContentCard from "./components/ContentCard/ContentCard";
import Skeleton from "./components/Skeleton/Skeleton";

export default function Card({ pokemon, loading }) {
    return(
        <>
        { loading ? <Skeleton />
                  : <ContentCard pokemon={pokemon}/> }
        </>
    );
};