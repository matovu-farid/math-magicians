import { Component } from 'react';
import MainList from './MainList';
import './Lists.css';
import OperationList from './OperationList';

class TypePad extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul className="flex">
        <MainList />
        <OperationList />
      </ul>
    );
  }
}

export { TypePad as default };
