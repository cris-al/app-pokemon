import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 1.5rem;
    backdrop-filter: blur(5px);
    box-shadow: 5px 5px 20px black;
    border-radius: 3px;
    margin-top: 1.5rem;
    @media (min-width: 375px) {
        width: 250px;
        padding: 1.7rem;
    }
    @media (min-width: 576px) {
        width: 300px;
        padding: 1.7rem 3rem;
    }
    @media (min-width: 768px) {
        margin-top: 2.8rem;
        width: 600px;
        padding-left: 1rem;
        flex-direction: row;
        justify-content: space-between;
        gap: 2rem;
    }
    @media (min-width: 992px) {
        width: 680px;
    }
    @media (min-width: 1200px) {
        width: 830px;
    }
`;

export const Image = styled.img`
    width: 150px;
    height: 150px;
    filter: drop-shadow(6px 6px 8px black);
    animation: animationimage 2s;
    transition: 0.5s;
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
    &:hover {
        transform: scale(1.1);
        filter: drop-shadow(6px 16px 8px black);
    }
    @keyframes animationimage {
        0%{ transform: translate(-1000px); }
        100%{ transform: translate(0); }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 0.8rem;
    width: 100%;
    animation: animatioopacity 4s;
    
    @keyframes animatioopacity {
        0%{ opacity: 0; }
        100%{ opacity: 1; }
    }
`;

export const CardTitle = styled.h2`
    font-size: 1.5rem;
    margin: 0;
    text-align: start;
    text-transform: capitalize;
    text-shadow: 0 0 4px black;
    @media (min-width: 576px) {
        font-size: 1.7rem;
    }
    @media (min-width: 992px) {
        font-size: 1.9rem;
    }
    @media (min-width: 1200px) {
        font-size: 2rem;
    }
`;

export const ContStat = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.5rem;
`;

export const Label = styled.label`
    font-size: 1.2rem;
    text-align: start;
    text-transform: capitalize;
    text-shadow: 0 0 3px black;
    @media (min-width: 576px) {
        font-size: 1.3rem;
    }
    @media (min-width: 768px) {
        font-size: 1.4rem;
    }
    @media (min-width: 1200px) {
        font-size: 1.5rem;
    }
`;

export const Div1 = styled.div`
    width: 100%;
    height: 10px;
    background-color: #212121;
    border-radius: 5px;
    box-shadow: 5px 5px 10px black;
`;

export const Div2 = styled.div`
    height: 100%;
    width: ${({val}) => val ? val : "100px"};
    background-color: ${({col}) => col ? col : "blue"};
    border-radius: 5px;
`;