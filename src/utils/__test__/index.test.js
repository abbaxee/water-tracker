import {calculatedHeightToFill, convertToLiter} from '..';

describe('test convertToLiter function', () => {
  it('should return value in Litre from MiliLitre', () => {
    expect(convertToLiter(4500)).toEqual(4.5);
    expect(convertToLiter(4350)).toEqual(4.35);
    expect(convertToLiter(150)).toEqual(0.15);
    expect(convertToLiter(2000)).toEqual(2);
  });
});

describe('test calculatedHeightToFill function', () => {
  it('should return the height to fill when entered', () => {
    // the human graphics will fill the (human height - resulting value) eg. 344 - 309.6

    expect(calculatedHeightToFill(450, 4500)).toEqual(309.6);
    expect(calculatedHeightToFill(450, 3500)).toEqual(299.7714285714286);
  });
});
