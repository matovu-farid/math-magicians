import { Component } from 'react';
import PropTypes from 'prop-types';

export default class WideTile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value } = this.props;
    return (<div className="tile  wide">{value}</div>);
  }
}

WideTile.propTypes = {
  value: PropTypes.string.isRequired,
};
