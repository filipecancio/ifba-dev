import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background-color: #E5E7EA;
    width: 100%;
    padding: 30px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
`;
export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Links = styled.a`
`;

export const Image = styled.img`
    width: fit-content;
    transition: 1s;
    max-height: 60px;
    margin: 20px;
`;