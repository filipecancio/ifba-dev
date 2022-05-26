import React from 'react';
import { Container, Image, SubContainer } from './styles';
import dasi from '../../util/dasi.png';
import caamb from '../../util/caamb.png';
import daee from '../../util/daee.png';
import ifba from '../../util/ifba.png';

const Index: React.FC = () => {
      return (
            <Container>
                  <SubContainer>
                        <Image src={daee} />
                        <Image src={ifba} />
                  </SubContainer>
                  <SubContainer>
                        <Image src={dasi} />
                        <Image src={caamb} />
                  </SubContainer>

            </Container>
      );
}

export default Index;