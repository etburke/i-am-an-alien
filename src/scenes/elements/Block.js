import React from 'react';
import styled from 'styled-components';
import colors from './colors';

const positions = [
  {
    top: '30%',
    left: '50%',
  },
  {
    top: '10%',
    left: '50%',
  },
  {
    top: '23%',
    left: '10%',
  },
];

const Block = styled.div`
  font-family: serif;
  position: relative;
  top: ${props => positions[props.position].top};
  left: ${props => positions[props.position].left};
  width: 45%;

  a {
    text-decoration: none;
    color: ${props => colors[props.linkColor]};
  }

  a:visited {
    color: ${props => colors[props.linkColor]};
  }
`;

Block.defaultProps = {
  position: 0,
  linkColor: 'pink',
};

export default Block;