import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import HeaderText from '../HeaderText';

describe('test <HeaderText /> component', () => {
  it('should have a quantity and a description', () => {
    const {getByText} = render(
      <HeaderText quantity="4.5" description="TOTAL WATER DRUNK" />,
    );

    expect(getByText('4.5')).not.toEqual(null);
    expect(getByText('TOTAL WATER DRUNK')).not.toEqual(null);
  });
});
