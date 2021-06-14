jest.useFakeTimers();
import React from 'react';
import {Alert} from 'react-native';
import TargetModal from '../TargetModal';
import {render, fireEvent, act} from '@testing-library/react-native';

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

  it('should call update target action if a value is entered and update button pressed', async () => {
    const handleSetTarget = jest.fn();
    const closeModal = jest.fn();

    const {queryByTestId} = render(
      <TargetModal
        modalVisible
        handleSetTarget={handleSetTarget}
        closeModal={closeModal}
      />,
    );

    const textInput = queryByTestId('text-input');
    const updateButton = queryByTestId('update-button');

    act(() => fireEvent.changeText(textInput, '1000'));

    await act(() => fireEvent.press(updateButton));
    expect(handleSetTarget).toHaveBeenCalledWith('1000');
  });
});
