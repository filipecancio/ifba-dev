import React from 'react';
import { Container } from './styles';

export interface Props {
    name?: String | "fulano";
    ddd?: String | "77";
    first?: String | "90000";
    second?: String | "0000";
  }

const Index: React.FC<Props> = props => {
    return (
        <>
        <a href={`https://api.whatsapp.com/send?phone=55${props.ddd}${props.first}${props.second}&text=Ol%C3%A1!%20gostaria%20de%20comprar%20um%20ingresso%20para%20a%20festa%20de%20jo%22ao%20do%20IFBA`} target="_blank" rel="noopener noreferrer">
            <Container>{props.name}: <b> ({props.ddd}) {props.first}-{props.second}</b> </Container>
        </a>
        </>
    );
}

export default Index;