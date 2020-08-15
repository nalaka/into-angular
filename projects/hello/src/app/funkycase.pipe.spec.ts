import { FunkycasePipe } from './funkycase.pipe';

describe('FunkycasePipe', () => {
  it('create an instance', () => {
    const pipe = new FunkycasePipe();
    expect(pipe).toBeTruthy();
  });

  it('handles a string', () => {
    const pipe = new FunkycasePipe();
    expect(pipe.transform('apple')).toEqual('aPpLe');
  });

  it('handles a number by passing it through unchanged', () => {
    const pipe = new FunkycasePipe();
    expect(pipe.transform(42)).toEqual(42);
  });
});
