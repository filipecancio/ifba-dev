import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background-color: #E5E7EA;
    width: 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
`;
export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Ground = styled.img`
    width: 100%;
    height: fit-content;
`;

export const Image = styled.img`
    width: fit-content;
    transition: 1s;
    max-height: 60px;
    margin: 20px;
`;