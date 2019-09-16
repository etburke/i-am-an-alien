import React, { Component } from 'react';
import { Block, Text, Link } from '../elements';
import styled from 'styled-components';

const Spacer = styled.div`
  height: 48px;
`;

const allLines = [
  <div>
    <Text><Link to='/h/3'>You come from a land of palaces,</Link></Text>
    <Text><Link to='/h/3'>kohinoor and yakshis.</Link></Text>
  </div>,
  <div>
    <Text><Link to='/h/3'>The gems stones embedded on</Link></Text>
    <Text><Link to='/h/3'>the walls of the palaces have been</Link></Text>
    <Text><Link to='/h/3'>gouged out like eye balls off the</Link></Text>
    <Text><Link to='/h/3'>sockets of a human body</Link></Text>
  </div>,
];

class C extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: [],
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.addline();
    }, 2500);
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.addline();
    }, 2500);
  }

  addline = () => {
    const { lines } = this.state;

    if (lines.length <= allLines.length) {
      console.log('lines.length', lines.length);
      const newLines = allLines.slice(0, ++lines.length);
      this.setState({
        lines: newLines,
      });
    }
  }

  render() {
    return (
      <Block position={2}>
        {this.state.lines}
      </Block>
    )
  }
}

export default C;