import calculate from '../calculate';

describe.skip('calulate methods', () => {
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
  it('it should clear the object', () => {
    expect(calculate(sampleObject, 'AC')).toEqual(nullObject);
  });
  it('should add a "0." to the total when everything is null', () => {
    expect(calculate(nullObject, '.')).toHaveProperty('total', '0.');
  });

  describe('number tests', () => {
    it('ashould update next value when a number is pressed without an operation', () => {
      expect(calculate(nullObject, '8')).toHaveProperty('next', '8');
    });
    it('ashould update next value when a number is pressed with an operation', () => {
      expect(calculate(sampleObject, '8')).toHaveProperty('next', '28');
    });
  });
  describe('dot button tests', () => {
    describe('next value present', () => {
      it('should update the next value to include the dot', () => {
        expect(calculate({ ...nullObject, next: '2' }, '.')).toHaveProperty('next', '2.');
      });
      it('should do nothing if the next value already includes a dot', () => {
        expect(calculate({ ...nullObject, next: '2.' }, '.')).toHaveProperty('next', '2.');
      });
    });
    describe('operation present and next value is null', () => {
      it('should return 0. when an operation is present but next is null', () => {
        expect(calculate({ ...nullObject, operation: '-' }, '.')).toHaveProperty('next', '0.');
      });
    });
    describe('only total is present while next and operation are null', () => {
      it('should do nothing when only the total is present and has a dot', () => {
        expect(calculate({ ...nullObject, total: '10.' }, '.')).toEqual({});
      });
      it('should add a dot to the total when only total is present', () => {
        expect(calculate({ ...nullObject, total: '10' }, '.')).toHaveProperty('total', '10.');
      });
    });

    describe('"=" button', () => {
      it('should return a total of 12 when operation is applied', () => {
        expect(calculate(sampleObject, '=')).toEqual({ ...nullObject, total: '12' });
      });
      it('should do nothing without next and operation', () => {
        expect(calculate(nullObject, '=')).toEqual({});
      });
    });
    describe('"+/-" button', () => {
      it('should negate the next value', () => {
        expect(calculate({ ...nullObject, next: '6' }, '+/-'))
          .toHaveProperty('next', '-6');
      });
      it('should negate the total if next is null', () => {
        expect(calculate({ ...nullObject, total: '-14' }, '+/-')).toHaveProperty('total', '14');
      });
      it('should do nothing when both the total and next are null', () => {
        expect(calculate(nullObject, '+/-')).toEqual({});
      });
    });
  });

  describe('update the operation', () => {
    it('update the positive operation', () => {
      expect(calculate({ ...nullObject, total: '45' }, '+')).toHaveProperty('operation', '+');
    });
    it('should update the negative operation', () => {
      expect(calculate({ ...nullObject, total: 45, operation: '+' }, '-')).toHaveProperty('operation', '-');
    });
    it('should return calculated obj with an updated operation', () => {
      expect(calculate(sampleObject, '-')).toEqual({ total: '12', next: null, operation: '-' });
    });
    it('should return only the updated operation', () => {
      expect(calculate(nullObject, '-')).toHaveProperty('operation', '-');
    });
    it('should save the operation and shift "next" into "total"', () => {
      expect(calculate({ nullObject, next: '2' }, '-')).toEqual({ total: '2', operation: '-', next: null });
    });
  });
});
