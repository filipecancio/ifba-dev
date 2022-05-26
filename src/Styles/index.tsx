import React from 'react';
import Colors from './Colors';
import Reset from './Reset';

export interface Props {
  dark?: Boolean | null;
}

const Index: React.FC<Props> = props => {
      return (
        <>
         <Reset/>
         <Colors/>
        </>
      );
    }

export default Index;