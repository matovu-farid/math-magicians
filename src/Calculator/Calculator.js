import { Component } from 'react';
import TypePad from '../components/Lists/TypePad';

import Answer from '../components/Answer/Answer';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul className="centerBox">
        <Answer />

        <TypePad />

      </ul>
    );
  }
}

export default Calculator;
