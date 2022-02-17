import operate from '../operate';

describe('Operate function', () => {
  it('should return 5 for the sum of 2 and 3', () => {
    expect(operate('2', '3', '+')).toBe('5');
  });
  it('should return -1 for the difference of 2 and 3', () => {
    expect(operate('2', '3', '-')).toBe('-1');
  });
  it('should return 6 for the product of 2 and 3', () => {
    expect(operate('2', '3', 'x')).toBe('6');
  });
  it('should return 0.5 for the division of 2 and 4', () => {
    expect(operate('2', '4', '÷')).toBe('0.5');
  });
  it('should not divide by zero', () => {
    expect(operate('2', '0', '÷')).toMatch(/can't divide by 0/i);
  });
  it('should not find a remainder when divided by zero', () => {
    expect(operate('2', '0', '%')).toMatch(/can't divide by 0/i);
  });
  it('should return 1 for the remainder of 3 and 2', () => {
    expect(operate('3', '2', '%')).toBe('1');
  });
});
