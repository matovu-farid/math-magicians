import { Component } from 'react';
import propTypes from 'prop-types';
import BottomRow from './Rows/bottomrow';
import TopSymbolRow from './Rows/toprow';
import NumberList from './NumberList';

class MainList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleButtonClick } = this.props;
    return (
      <ul className="main-list">
        <TopSymbolRow handleButtonClick={handleButtonClick} />
        <NumberList handleButtonClick={handleButtonClick} />
        <BottomRow handleButtonClick={handleButtonClick} />
      </ul>
    );
  }
}

MainList.propTypes = {
  handleButtonClick: propTypes.func.isRequired,
};

export default MainList;
