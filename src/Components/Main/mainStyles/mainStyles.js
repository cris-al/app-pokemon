import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const Container = styled.div`
    padding: 1rem;
    max-width: 1300px;
    // @media (min-width: 375px) {
    //     padding: 2rem 2.5rem;
    // }
    @media (min-width: 576px) {
        padding-top: 2rem;
    }
    // @media (min-width: 768px) {
    //     padding: 2rem 5rem;
    // }
`;

export const MessageContainer = styled.div`
    padding: 1rem;
    border-radius: 3px;
    box-shadow: 5px 5px 20px black;
    backdrop-filter: blur(5px);
    margin-top: 2rem;
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
    }
    @media (min-width: 992px) {
        width: 680px;
    }
    @media (min-width: 1200px) {
        width: 830px;
    }
`;

export const Paragraph = styled.p`
    text-shadow: 2px 2px 2px black;
    @media (min-width: 576px) {
        font-size: 1.2rem;
    }
    @media (min-width: 992px) {
        font-size: 1.4rem;
    }
`;

export const Icon = styled.img`
    width: 20px;
    height: 20px;
    filter: drop-shadow(0 0 2px #bdbdbd);
    @media (min-width: 576px) {
        width: 25px;
        height: 25px;
    }
    @media (min-width: 992px) {
        width: 30px;
        height: 30px;
    }
`;