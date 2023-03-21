import styled from "styled-components";

const skeleton = "@keyframes skeleton { 0%{background-color: #01579b;} 50%{ background-color: #0277bd;} 100%{background-color: #01579b;} }";

export const SkeletonImage = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 20px;
    background-color: #01579b;
    animation: skeleton 2s infinite;
    @media (min-width: 375px) {
        width: 180px;
        height: 180px;
    }
    @media (min-width: 576px) {
        width: 230px;
        height: 230px;
    }
    @media (min-width: 768px) {
        width: 340px;
        height: 340px;
    }
    @media (min-width: 992px) {
        width: 380px;
        height: 380px;
    }
    @media (min-width: 1200px) {
        width: 480px;
        height: 480px;
    }
    ${skeleton}
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 0.8rem;
    width: 100%;
`;

export const SkeletonParagraph = styled.div`
    width: 100%;
    height: 45px;
    background-color: #01579b;
    border-radius: 3px;
    animation: skeleton 2s infinite;
    ${skeleton}
`;