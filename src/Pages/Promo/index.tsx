import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import {
  Container,
  Content,
  Section01,
  Image,
  Preco,
  Botao,
  SubSection,
  Title,
  H1,
  P1,
} from "./styles";
import image01 from "../../util/frame01.png";
import image02 from "../../util/frame02.png";
import image03 from "../../util/frame03.png";
import preco from "../../util/preco.png";
import Contact from "../../Components/Contact";
import { api } from "../../services/api";

interface Person {
  name: string;
  code: string;
  first: string;
  second: string;
  ddd: string;
}
interface Contacts {
  ambiental: Person[];
  bsi: Person[];
  eletrica: Person[];
}

const Index: React.FC = () => {
  const [contacts, setContacts] = useState<Contacts>({
    ambiental: [],
    bsi: [],
    eletrica: [],
  });

  useEffect(() => {
    (async () => {
      const { data } = await api.get<Contacts>("getContacts");
      setContacts(data);
    })();
  }, []);

  return (
    <Container>
      <Content>
        <Header />
        <Section01>
          <Preco src={preco} />
          <Botao href="#ingresso">Comprar ingresso</Botao>
        </Section01>
        <Section01>
          <Image src={image01} />
          <Image src={image02} />
          <Image src={image03} />
        </Section01>
        <Section01 id="ingresso">
          <H1>Compra de Ingresso</H1>
          <P1>
            Para comprar um ingresso basta entrar em contato com os nossos
            representantes:
          </P1>
        </Section01>
        <Section01>
          <SubSection>
            <Title>ELÉTRICA</Title>
            {contacts.eletrica.map((item) => (
              <Contact
                name={item.name}
                ddd={item.ddd}
                first={item.first}
                second={item.second}
              />
            ))}
          </SubSection>
          <SubSection>
            <Title>AMBIENTAL</Title>
            {contacts.ambiental.map((item) => (
              <Contact
                name={item.name}
                ddd={item.ddd}
                first={item.first}
                second={item.second}
              />
            ))}
          </SubSection>
          <SubSection>
            <Title>BSI</Title>
            {contacts.bsi.map((item) => (
              <Contact
                name={item.name}
                ddd={item.ddd}
                first={item.first}
                second={item.second}
              />
            ))}
          </SubSection>
        </Section01>
        <Footer />
      </Content>
    </Container>
  );
};

export default Index;
