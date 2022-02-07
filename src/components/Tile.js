import './Tile.css';
import PropTypes from 'prop-types';

const NumberTile = ({ value }) => <div className="tile">{value}</div>;
NumberTile.propTypes = {
  value: PropTypes.string.isRequired,
};
const OpperationTile = ({ opp }) => <li className="tile orange">{opp}</li>;
OpperationTile.propTypes = { opp: PropTypes.string.isRequired };
const WideTile = ({ value }) => <div className="tile  wide">{value}</div>;
WideTile.propTypes = {
  value: PropTypes.string.isRequired,
};
export {
  NumberTile, OpperationTile, WideTile,
};
