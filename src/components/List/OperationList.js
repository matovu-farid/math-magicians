import { Component } from 'react';
import { OpperationTile } from '../Tiles/Tile';

class OperationList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul className="opp-list">
        <OpperationTile opp="÷" />
        <OpperationTile opp="x" />
        <OpperationTile opp="-" />
        <OpperationTile opp="+" />
        <OpperationTile opp="+" />
      </ul>
    );
  }
}

export default OperationList;
