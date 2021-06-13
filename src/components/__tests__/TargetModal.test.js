import React from 'react';
import {Alert, View} from 'react-native';
import {render, fireEvent} from '@testing-library/react-native';
import TargetModal from '../TargetModal';

describe('test <TargetModal /> component', () => {
  it('should have a header and a subheader', () => {
    const {getByText} = render(<TargetModal modalVisible />);

    expect(getByText('Update Target Water')).not.toEqual(null);
    expect(getByText('Please enter your new water target below:')).not.toEqual(
      null,
    );
  });

  it('should show an alert if no value is entered', () => {
    const {queryByTestId} = render(<TargetModal modalVisible />);

    const updateButton = queryByTestId('update-button');
    const AlertSpy = jest.spyOn(Alert, 'alert');

    fireEvent.press(updateButton);
    expect(AlertSpy).toHaveBeenCalled();
  });

  // it('should call the update function if ', () => {
  //   const {queryByTestId} = render(<TargetModal modalVisible />);

  //   const textInput = queryByTestId('text-input');
  //   console.log(textInput);
  //   const updateButton = queryByTestId('update-button');
  //   const AlertSpy = jest.spyOn(Alert, 'alert');

  //   fireEvent.changeText(textInput, '10');

  //   fireEvent.press(updateButton);
  //   expect(AlertSpy).not.toHaveBeenCalled();
  // });
});
