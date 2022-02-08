import { Component } from 'react';
import './Tile.css';
import PropTypes from 'prop-types';

export default class OpperationTile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { opp } = this.props;
    return (<li className="tile orange">{opp}</li>);
  }
}
OpperationTile.propTypes = { opp: PropTypes.string.isRequired };
