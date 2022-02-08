import { Component } from 'react';
import PropTypes from 'prop-types';

export default class WideTile extends Component {
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
    return (
      <button
        type="button"
        className="tile  wide"
        onClick={this.onClick}
      >
        {value}
      </button>
    );
  }
}

WideTile.propTypes = {
  value: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};
