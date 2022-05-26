import styled from 'styled-components';
import image from '../../util/night.svg';
import { mobile } from "../../Styles/Breakpoints";

export const Container = styled.div`
    width: 100%;
    height: 440px;
    display: flex;
    justify-content: end;
    align-items: center;
    @media ${mobile.tablet} {
        justify-content: center;
    }
    background-image: url(${image});

`;

export const Content = styled.img`

    max-width: 500px;
    width: 60%;
    object-fit: contain;
    margin-right: 50px;
    transition: 1s;
    @media ${mobile.tablet} {
        margin-top: 200px;
        margin-right: 0px;
    }
`;