import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import Quantity from '../Quantity';

describe('test <Quantity /> component', () => {
  it('should have an item text', () => {
    const {getByText} = render(<Quantity item="125" />);

    expect(getByText('125 ml')).not.toEqual(null);
  });
});
