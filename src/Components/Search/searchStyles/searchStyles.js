import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    @media (min-width: 576px) {
        justify-content: end;
    }
`;

export const Input = styled.input`
    font-size: 1rem;
    padding: 0.8rem 1rem;
    width: 100%;
    border-radius: 20px;
    border: none;
    background-color: #212121;
    box-shadow: 8px 8px 20px black;
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
    border-radius: 50%;
    border: none;
    background-color: #004d40;
    box-shadow: 8px 8px 10px black;
    padding: 0.6rem;
    &:hover {
        cursor: pointer;
        background-color: #00695c;
    }
`;

export const Icon = styled.img`
    width: 26px;
    height: 26px;
`;

export const LoadButton = styled.div`
    border: 2px solid #212121;
    border-left-color: transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    width: 24px;
    height: 24px;
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
`;