import { Component } from 'react';
import PropTypes from 'prop-types';
import './Tile.css';

export default class NumberTile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value } = this.props;
    return (<div className="tile">{value}</div>);
  }
}
NumberTile.propTypes = {
  value: PropTypes.string.isRequired,
};
