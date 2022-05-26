import React from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import { Container, Content,Section01,Image,Preco } from './styles';
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
                        <Preco src={preco}/>
                        </Section01>
                        <Section01>
                              <Image src={image01}/>
                              <Image src={image02}/>
                              <Image src={image03}/>
                        </Section01>
                        <Footer />
                  </Content>
            </Container>
      );
}

export default Index;