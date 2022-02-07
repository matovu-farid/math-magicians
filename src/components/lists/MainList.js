import { Component } from 'react';
import BottomRow from '../rows/bottomrow';
import TopSymbolRow from '../rows/toprow';
import NumberList from './NumberList';

class MainList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul className="main-list">
        <TopSymbolRow />
        <NumberList />
        <BottomRow />
      </ul>
    );
  }
}

export default MainList;
