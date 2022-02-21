import { Component } from 'react';
import './Tile.css';
import PropTypes from 'prop-types';

export default class OpperationTile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClick=({ target: { textContent } }) => {
    const name = textContent.trim();
    const { handleButtonClick } = this.props;
    handleButtonClick(name);
  }

  render() {
    const { opp, handleOpperate } = this.props;
    if (opp === '=') {
      return (
        <button
          type="button"
          className="tile orange"
          onClick={handleOpperate}
        >
          {opp}
        </button>
      );
    }
    return (
      <button
        type="button"
        className="tile orange"
        onClick={this.onClick}
      >
        {opp}
      </button>
    );
  }
}
OpperationTile.propTypes = {
  opp: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  handleOpperate: PropTypes.func.isRequired,
};
