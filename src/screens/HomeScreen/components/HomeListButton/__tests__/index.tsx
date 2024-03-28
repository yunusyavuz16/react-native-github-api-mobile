import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import HomeListButton, {ButtonVariant} from '..';

describe('HomeListButton', () => {
  // Test rendering of the button with different props
  test('renders button with label', () => {
    const {getByText} = render(
      <HomeListButton variant="classic" label="Test Label" />,
    );
    expect(getByText('Test Label')).toBeTruthy();
  });

  test('renders button with disabled state', () => {
    const {getByTestId} = render(
      <HomeListButton variant="classic" label="Test Label" isDisabled={true} />,
    );
    // chec is button disabled
    expect(getByTestId('home-list-button')).toBeDisabled();
  });

  // Test onPress functionality
  test('calls onPress prop when clicked', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <HomeListButton
        variant="classic"
        label="Test Label"
        onPress={onPressMock}
      />,
    );
    fireEvent.press(getByText('Test Label'));
    expect(onPressMock).toHaveBeenCalled();
  });

  const testStyle = (
    variant: ButtonVariant,
    expectedBackgroundStyle: string,
    expectedTextStyle: string,
  ) => {
    const {getByTestId} = render(
      <HomeListButton label="Test Label" variant={variant} />,
    );
    const button = getByTestId('home-list-button');
    const buttonStyle = button.props.style; // Accessing the style prop

    expect(buttonStyle.backgroundColor).toBe(expectedBackgroundStyle);

    const text = getByTestId('home-list-button-text');
    const textStyle = text.props.style;
    expect(textStyle.color).toBe(expectedTextStyle);
  };

  test('applies correct styles for primary variant', () => {
    testStyle('primary', 'rgb(85,124,230)', '#FFFFFF');
  });

  test('applies correct styles for secondary variant', () => {
    testStyle('secondary', 'rgb(200,200,200)', '#FFFFFF');
  });

  test('applies correct styles for classic variant', () => {
    testStyle('classic', 'white', '#000000');
  });

  test('applies correct styles for bordered-primary variant', () => {
    testStyle('bordered-primary', 'white', '#FFFFFF');
  });

  test('applies correct styles for bordered-secondary variant', () => {
    testStyle('bordered-secondary', 'white', '#000000');
  });
});
