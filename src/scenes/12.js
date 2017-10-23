import React from 'react';
import { Block, Text, Link } from './elements';

const Component = () => (
  <Block>
    <Text>It takes you more time to climb the</Text>
    <Text><Link to='/13'>ladder</Link></Text>
  </Block>
);

export default Component;
