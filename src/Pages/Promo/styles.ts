import styled from 'styled-components';

export const Container = styled.div`
    background-color: #02165D;
    width: 100%;
    min-height: 100%;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const Content = styled.div`
    background-color: #02165D;
    width: 100%;
    max-width: 1080px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Section01 = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    transition: 1s;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    width: fit-content;
    max-height: 80px;
    margin: 20px;
`;

export const Preco = styled.img`
    width: fit-content;
    max-width: 250px;
    margin: 20px;
`;

export const Botao = styled.a`
    width: fit-content;
    width: 150px;
    height: 50px;
    margin: 10px;
    display: flex;
    background-color: #F4BA15;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: #E0692B solid 3px;
    color: #02165D;
    font-family: 'Boogaloo';
`;