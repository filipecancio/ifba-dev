import React from 'react';
import { Container, Image, SubContainer,Ground } from './styles';
import dasi from '../../util/dasi.png';
import caamb from '../../util/caamb.png';
import daee from '../../util/daee.png';
import ifba from '../../util/ifba.png';
import local from '../../util/local.png';
import ground from '../../util/ground.png';

const Index: React.FC = () => {
      return (
            <>
            <Ground src={ground} />
                  <Container>
                        <Image src={local} />
                        <SubContainer>
                              <Image src={ifba} />
                              <Image src={daee} />
                        </SubContainer>
                        <SubContainer>
                              <Image src={dasi} />
                              <Image src={caamb} />
                        </SubContainer>

                  </Container>
            </>
      );
}

export default Index;