import { Component } from 'react';
import { NumberTile } from '../Tile';

class TopSymbolRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul className="flex">
        <NumberTile value="AC" />
        <NumberTile value="+/-" />
        <NumberTile value="%" />
      </ul>
    );
  }
}

export default TopSymbolRow;
