import { Component } from 'react';
import PropTypes from 'prop-types';
import './Tile.css';

export default class NumberTile extends Component {
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
    const { value } = this.props;
    return (<button type="button" className="tile" onClick={this.onClick}>{value}</button>);
  }
}
NumberTile.propTypes = {
  value: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};
