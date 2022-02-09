import { useState } from 'react';
import TypePad from '../List/List';

import Answer from '../Answer/Answer';
import './Calculator.css';
import calculate from '../../logic/calculate';
import operate from '../../logic/operate';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const getState = () => (
    { total, next, operation }
  );

  const handleButtonClick = (buttonName) => {
    const obj = calculate(getState(), buttonName);
    const { total: totalGot, next: nextGot, operation: operationGot } = obj;
    if (totalGot !== undefined) setTotal(totalGot);
    if (nextGot !== undefined) setNext(nextGot);
    if (operationGot !== undefined) setOperation(operationGot);
  };

  const handleOpperate = () => {
    const answer = operate(total, next, operation);
    setTotal(answer);
    setOperation(null);
    setNext(null);
  };

  return (
    <ul className="centerBox">
      <Answer total={total} next={next} operation={operation} />

      <TypePad handleButtonClick={handleButtonClick} handleOpperate={handleOpperate} />

    </ul>
  );
};

export default Calculator;
