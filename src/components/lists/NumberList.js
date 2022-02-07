import { Component } from 'react';
import { NumberTile } from '../Tile';

class NumberList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul className="num-list">

        {
      Array.from(Array(9).keys()).map((i) => <NumberTile key={i} value={i + 1} />)
    }
      </ul>
    );
  }
}

export default NumberList;
