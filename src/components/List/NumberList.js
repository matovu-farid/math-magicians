import propTypes from 'prop-types';
import { Component } from 'react';
import { NumberTile } from '../Tiles/Tile';

class NumberList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleButtonClick } = this.props;
    return (
      <ul className="num-list">

        {
      Array.from(Array(9).keys()).map((i) => <NumberTile key={i} handleButtonClick={handleButtonClick} value={`${i + 1}`} />)
    }
      </ul>
    );
  }
}

NumberList.propTypes = {
  handleButtonClick: propTypes.func.isRequired,
};

export default NumberList;
