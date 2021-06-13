import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import TargetModal from '../TargetModal';

describe('test <TargetModal /> component', () => {
  it('should have a header', () => {
    const {getByText} = render(<TargetModal />);

    expect(getByText('Update Target Water')).not.toEqual(null);
  });
});
