import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    @media (min-width: 576px) {
        justify-content: end;
    }
`;

export const Input = styled.input`
    font-size: 1rem;
    padding: 0.8rem 1rem;
    width: 100%;
    border-radius: 3px 0 0 3px;
    border: none;
    background-color: #212121;
    outline: none;
    color: #e0e0e0;
    @media (min-width: 576px) {
        width: 250px;
    }
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 3px 3px 0;
    border: none;
    background-color: #004d40;
    padding: 0.6rem;
    &:hover {
        cursor: pointer;
        background-color: #00695c;
    }
`;

export const Icon = styled.img`
    width: 25px;
    height: 25px;
`;