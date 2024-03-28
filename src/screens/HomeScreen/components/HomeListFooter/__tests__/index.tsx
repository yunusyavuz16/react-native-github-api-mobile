import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import Footer from '..';

describe('Footer', () => {
  const mockHandlePreviousPage = jest.fn();
  const mockHandleNextPage = jest.fn();

  test('renders correctly with page number', () => {
    const { getByText } = render(
      <Footer
        pageNumber={1}
        handlePreviousPage={mockHandlePreviousPage}
        handleNextPage={mockHandleNextPage}
      />
    );

    expect(getByText('Sayfa: 1')).toBeTruthy();
  });

  test('handles previous page click correctly', () => {
    const { getByText } = render(
      <Footer
        pageNumber={2}
        handlePreviousPage={mockHandlePreviousPage}
        handleNextPage={mockHandleNextPage}
      />
    );

    fireEvent.press(getByText('Geri'));
    expect(mockHandlePreviousPage).toHaveBeenCalledTimes(1);
  });

  test('handles next page click correctly', () => {
    const { getByText } = render(
      <Footer
        pageNumber={1}
        handlePreviousPage={mockHandlePreviousPage}
        handleNextPage={mockHandleNextPage}
      />
    );

    fireEvent.press(getByText('İleri'));
    expect(mockHandleNextPage).toHaveBeenCalledTimes(1);
  });

  test('disables previous button when page number is 1', () => {
    const { getByText } = render(
      <Footer
        pageNumber={1}
        handlePreviousPage={mockHandlePreviousPage}
        handleNextPage={mockHandleNextPage}
      />
    );

    const previousButton = getByText('Geri');
    expect(previousButton.props.isDisabled).toBeTruthy();
  });
});
