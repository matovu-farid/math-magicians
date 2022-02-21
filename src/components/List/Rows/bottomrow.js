import propTypes from 'prop-types';
import { Component } from 'react';
import { NumberTile, WideTile } from '../../Tiles/Tile';

class BottomRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleButtonClick } = this.props;
    return (
      <ul className="top-list">
        <WideTile handleButtonClick={handleButtonClick} value="0" />
        <NumberTile handleButtonClick={handleButtonClick} value="." />
      </ul>
    );
  }
}

BottomRow.propTypes = {
  handleButtonClick: propTypes.func.isRequired,
};

export default BottomRow;
