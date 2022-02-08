import { Component } from 'react';
import BottomRow from './Rows/bottomrow';
import TopSymbolRow from './Rows/toprow';
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
