import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Answer from '../Answer';

describe.skip('Answer component tests', () => {
  let sampleObject;
  let nullObject;

  beforeEach(() => {
    sampleObject = {
      total: '10',
      next: '2',
      operation: '+',
    };
    nullObject = {
      total: null,
      next: null,
      operation: null,
    };
  });

  it('should display "10 + 2"', () => {
    const { total, next, operation } = sampleObject;
    render(<Answer total={total} next={next} operation={operation} />);
    const displayText = screen.queryByText('10 + 2');
    expect(displayText).toBeInTheDocument();
  });
  it('should display "0" with no input', () => {
    const { total, next, operation } = nullObject;
    render(<Answer total={total} next={next} operation={operation} />);
    const displayText = screen.queryByText('0');
    expect(displayText).toBeInTheDocument();
  });
  it('should render the value typed by the user', () => {
    const { total, operation } = nullObject;
    render(<Answer total={total} next={7} operation={operation} />);
    const displayText = screen.queryByText('7');
    expect(displayText).toBeInTheDocument();
  });
});
