import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    gap: 2rem;
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;
    animation: animimage 5s infinite;
    filter: contrast(200%);

    @media (min-width: 375px) {
        width: 130px;
        height: 130px;
    }
    @media (min-width: 576px) {
        width: 180px;
        height: 180px;
    }
    @media (min-width: 768px) {
        width: 200px;
        height: 200px;
    }
    @media (min-width: 1200px) {
        width: 250px;
        height: 250px;
    }

    @keyframes animimage {
        0%{ transform: translate(0, 0); }
        50%{ transform: translate(0, 35px); }
        100%{ transform: translate(0, 0); }
    }
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    animation: animtitle 3s infinite;
    @media (min-width: 375px) {
        font-size: 2rem;
    }
    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
    @media (min-width: 768px) {
        font-size: 3rem;
    }
    @keyframes animtitle {
        0%{ text-shadow: red -3px 0, blue 3px 0; }
        50%{ text-shadow: none; }
        100%{ text-shadow: red -3px 0, blue 3px 0; }
    }
`;