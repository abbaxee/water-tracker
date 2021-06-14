import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import Main from '../Main';

test('should match Main Screen snapshot', () => {
  const MainRender = render(<Main />).toJSON();

  expect(MainRender).toMatchSnapshot();
});
