import { Component } from 'react';
import TypePad from './lists/TypePad';

import Answer from './Answer';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul>
        <Answer />

        <TypePad />

      </ul>
    );
  }
}

export default Calculator;
