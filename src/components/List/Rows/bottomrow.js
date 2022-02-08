import { Component } from 'react';
import { NumberTile, WideTile } from '../../Tiles/Tile';

class BottomRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul className="top-list">
        <WideTile value="0" />
        <NumberTile value="." />
      </ul>
    );
  }
}

export default BottomRow;
