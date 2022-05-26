import React from 'react';
import { Container, Content } from './styles';
import content from '../../util/title.png';

const Index: React.FC = () => {
      return (
            <Container>
                 <Content src={content}/>
            </Container>
      );
}

export default Index;