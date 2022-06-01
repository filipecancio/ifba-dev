import React from "react";
import { Container } from "./styles";

export interface Props {
  name: String;
  ddd: String;
  first: String;
  second: String;
}

const Index: React.FC<Props> = (props) => {
  return (
    <>
      <a
        href={`https://api.whatsapp.com/send?phone=55${props.ddd}${props.first}${props.second}&text=Ol%C3%A1!%20gostaria%20de%20comprar%20um%20ingresso%20para%20a%20festa%20de%20S%C3%A3o%20Jo%C3%A3o%20IFBA`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Container>
          {props.name}:{" "}
          <b>
            {" "}
            ({props.ddd}) {props.first}-{props.second}
          </b>{" "}
        </Container>
      </a>
    </>
  );
};

export default Index;
