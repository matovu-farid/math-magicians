import { Component } from 'react';
import propTypes from 'prop-types';
import MainList from './MainList';
import './Lists.css';
import OperationList from './OperationList';

class TypePad extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleButtonClick, handleOpperate } = this.props;
    return (
      <ul className="flex">
        <MainList handleButtonClick={handleButtonClick} />
        <OperationList handleButtonClick={handleButtonClick} handleOpperate={handleOpperate} />
      </ul>
    );
  }
}

TypePad.propTypes = {
  handleButtonClick: propTypes.func.isRequired,
  handleOpperate: propTypes.func.isRequired,
};

export { TypePad as default };
