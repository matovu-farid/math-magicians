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
        <li>
          <NumberTile value="AC" handleButtonClick={handleButtonClick} />
        </li>
        <li>
          <NumberTile value="+/-" handleButtonClick={handleButtonClick} />
        </li>
        <li>
          <NumberTile value="%" handleButtonClick={handleButtonClick} />
        </li>
      </ul>
    );
  }
}

TopSymbolRow.propTypes = {
  handleButtonClick: propTypes.func.isRequired,
};

export default TopSymbolRow;
