import { Component } from 'react';
import TypePad from '../List/List';

import Answer from '../Answer/Answer';
import './Calculator.css';
import calculate from '../../logic/calculate';
import operate from '../../logic/operate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({
      total: null,
      next: null,
      operation: null,
    });
  }

  handleButtonClick = (buttonName) => {
    const obj = calculate({ ...this.state }, buttonName);
    this.setState(obj);
  }

  handleOpperate = () => {
    const { total, next, operation } = this.state;
    this.setState({ total: operate(total, next, operation) }, () => {
      this.setState({ next: null, operation: null });
    });
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <ul className="centerBox">
        <Answer total={total} next={next} operation={operation} />

        <TypePad handleButtonClick={this.handleButtonClick} handleOpperate={this.handleOpperate} />

      </ul>
    );
  }
}

export default Calculator;
