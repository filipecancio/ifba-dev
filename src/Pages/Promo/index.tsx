import React from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import { Container, Content, Section01, Image, Preco, Botao, SubSection, Title, Item, H1, P1 } from './styles';
import image01 from '../../util/frame01.png';
import image02 from '../../util/frame02.png';
import image03 from '../../util/frame03.png';
import preco from '../../util/preco.png';
import Contact from '../../Components/Contact';
import data from '../../util/data.json';


const Index: React.FC = () => {
      const eletrica = [
            { name: "Luciane Santos", ddd: "77", first: "99828", second: "7014" },
            { name: "Estefani Montenegro", ddd: "74", first: "99944", second: "0759" },
            { name: "Laiza Costa", ddd: "77", first: "98115", second: "6154" },
            { name: "Jonas Souza", ddd: "77", first: "99807", second: "7522" },
            { name: "Mikelly Bonfim", ddd: "77", first: "99936", second: "0410" }
      ]
      const ambiental = [
            { name: "Paulina Meira", ddd: "77", first: "98805", second: "0559" },
            { name: "Brunna Justo", ddd: "77", first: "99866", second: "6939" },
            { name: "Isabela Freire", ddd: "77", first: "98102", second: "5803" },
            { name: "Matheus Gusmão", ddd: "77", first: "98855", second: "4053" }]
      const bsi = [
            { name: "Arthur Lemos", ddd: "77", first: "98157", second: "0051" },
            { name: "Flávio Filipe", ddd: "77", first: "99811", second: "5173" },
            { name: "Gabriel Oliveira", ddd: "77", first: "8851", second: "6200" }
      ]

      return (
            <Container>
                  <Content>
                        <Header />
                        <Section01>
                              <Preco src={preco} />
                              <Botao href='#ingresso'>
                                    Comprar ingresso
                              </Botao>
                        </Section01>
                        <Section01>
                              <Image src={image01} />
                              <Image src={image02} />
                              <Image src={image03} />
                        </Section01>
                        <Section01 id='ingresso'>
                              <H1>Compra de Ingresso</H1>
                              <P1>Para comprar um ingresso basta entrar em contato com os nossos representantes:</P1>
                        </Section01>
                        <Section01>
                              <SubSection>
                                    <Title>ELÉTRICA</Title>
                                    {data.eletrica.map((item)=> <Contact name={item.name} ddd={item.ddd} first={item.first} second={item.second}/>)}
                              </SubSection>
                              <SubSection>
                                    <Title>AMBIENTAL</Title>
                                    {data.ambiental.map((item)=> <Contact name={item.name} ddd={item.ddd} first={item.first} second={item.second}/>)}
                              </SubSection>
                              <SubSection>
                                    <Title>BSI</Title>
                                    {data.bsi.map((item)=> <Contact name={item.name} ddd={item.ddd} first={item.first} second={item.second}/>)}
                              </SubSection>



                        </Section01>
                        <Footer />
                  </Content>
            </Container>
      );
}

export default Index;