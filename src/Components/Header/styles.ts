import styled from 'styled-components';
import image from '../../util/night.svg';

export const Container = styled.div`
    width: 100%;
    height: 440px;
    display: flex;
    justify-content: center;
    background-image: url(${image});
`;

export const Content = styled.svg`
    width:100%;
    height: 440px;
    fill:none;
`;