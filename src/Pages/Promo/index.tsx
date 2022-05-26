import React from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import { Container, Content, Section01, Image, Preco, Botao, SubSection, Title, Item,H1, P1 } from './styles';
import image01 from '../../util/frame01.png';
import image02 from '../../util/frame02.png';
import image03 from '../../util/frame03.png';
import preco from '../../util/preco.png';

const Index: React.FC = () => {
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
                                    <Item>Luciane Santos: (77) 99828-7014</Item>
                                    <Item>Estefani Montenegro: (74) 99944-0759</Item>
                                    <Item>Laiza Costa: (77) 98115-6154</Item>
                                    <Item>Jonas Souza: (77) 99807-7522</Item>
                                    <Item>Mikelly Bonfim: (77) 99936-0410</Item>
                              </SubSection>
                              <SubSection>
                                    <Title>AMBIENTAL</Title>
                                    <Item>Paulina Meira: (77) 98805-0559</Item>
                                    <Item>Brunna Justo: (77) 99866-6939</Item>
                                    <Item>Isabela Freire: (77) 98102-5803</Item>
                                    <Item>Matheus Gusmão: (77) 98855-4053</Item>
                              </SubSection>
                              <SubSection>
                                    <Title>BSI</Title>
                                    <Item>Arthur Lemos: (77) 98157-0051</Item>
                                    <Item>Flávio Filipe: (77) 99811-5173</Item>
                                    <Item>Gabriel Oliveira: (77)98851-0051</Item>
                              </SubSection>



                        </Section01>
                        <Footer />
                  </Content>
            </Container>
      );
}

export default Index;