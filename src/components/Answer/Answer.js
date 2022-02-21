import propTypes from 'prop-types';
import { Component } from 'react';
import './Answer.css';

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { total, next, operation } = this.props;
    if (total === null && next === null) return (<div className="answer">0</div>);
    if (total === null) return (<div className="answer">{next}</div>);
    return (<div className="answer">{`${total} ${operation ?? ''} ${next ?? ''}`}</div>);
  }
}

Answer.propTypes = {
  total: propTypes.string,
  next: propTypes.string,
  operation: propTypes.string,
};

Answer.defaultProps = {
  total: '',
  next: '',
  operation: '',
};

export default Answer;
