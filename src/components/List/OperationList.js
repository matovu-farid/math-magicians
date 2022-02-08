import propTypes from 'prop-types';
import { Component } from 'react';
import { OpperationTile } from '../Tiles/Tile';

class OperationList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.symbolArray = ['÷', '-', 'x', '+', '='];
  }

  render() {
    const { handleButtonClick, handleOpperate } = this.props;
    return (
      <ul className="opp-list">

        {this.symbolArray
          .map((symbol) => (
            <OpperationTile
              key={symbol}
              opp={symbol}
              handleButtonClick={handleButtonClick}
              handleOpperate={handleOpperate}
            />
          ))}
      </ul>
    );
  }
}

OperationList.propTypes = {
  handleButtonClick: propTypes.func.isRequired,
  handleOpperate: propTypes.func.isRequired,
};

export default OperationList;
