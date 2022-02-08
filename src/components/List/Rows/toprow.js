import propTypes from 'prop-types';
import { Component } from 'react';
import { NumberTile } from '../../Tiles/Tile';

class TopSymbolRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleButtonClick } = this.props;
    return (
      <ul className="flex">
        <NumberTile value="AC" handleButtonClick={handleButtonClick} />
        <NumberTile value="+/-" handleButtonClick={handleButtonClick} />
        <NumberTile value="%" handleButtonClick={handleButtonClick} />
      </ul>
    );
  }
}

TopSymbolRow.propTypes = {
  handleButtonClick: propTypes.func.isRequired,
};

export default TopSymbolRow;
