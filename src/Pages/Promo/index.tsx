import React from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import { Container, Content } from './styles';

const Index: React.FC = () => {
      return (
            <Container>
                  <Content>
                        <Header />
                        <Footer />
                  </Content>
            </Container>
      );
}

export default Index;