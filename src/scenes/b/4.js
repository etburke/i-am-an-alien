import React, { Component } from 'react';
import { Block, Text, Link, SuperBlock } from '../elements';
import styled from 'styled-components';

class C extends Component {
  render() {
    return (
      <SuperBlock>
        <Block position={1} linkColor='yellow'>
          <Text textColor='maroon'>Your body is horrific and harmful</Text>
          <Text textColor='maroon'>Your perceptions have been altered and rendered.</Text>
          <Text textColor='maroon'>Are you safe from all fear and rage from within and outside?</Text>
          <Text textColor='maroon'>The top layer of your skin is peeling off</Text>
        </Block>
        <Block position={11} linkColor='yellow'>
          <Text scale={true}><Link to='/d/0'>Splendor of race</Link></Text>
        </Block>
      </SuperBlock>
    );
  }
}

export default C;
