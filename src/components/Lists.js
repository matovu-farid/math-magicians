import { OpperationTile, NumberTile, WideTile } from './Tile';
import './Lists.css';

const OperationList = () => (
  <ul className="opp-list">
    <OpperationTile opp="÷" />
    <OpperationTile opp="x" />
    <OpperationTile opp="-" />
    <OpperationTile opp="+" />
    <OpperationTile opp="+" />
  </ul>
);

const NumberList = () => (
  <ul className="num-list">

    {
      Array.from(Array(9).keys()).map((i) => <NumberTile key={i} value={i + 1} />)
    }
  </ul>
);

const TopSymbolRow = () => (
  <ul className="flex">
    <NumberTile value="AC" />
    <NumberTile value="+/-" />
    <NumberTile value="%" />
  </ul>
);

const BottomRow = () => (
  <ul className="top-list">
    <WideTile value="0" />
    <NumberTile value="." />
  </ul>
);

const MainList = () => (
  <ul className="main-list">
    <TopSymbolRow />
    <NumberList />
    <BottomRow />
  </ul>
);

const TypePad = () => (
  <ul className="flex">
    <MainList />
    <OperationList />
  </ul>
);

export { TypePad as default };
