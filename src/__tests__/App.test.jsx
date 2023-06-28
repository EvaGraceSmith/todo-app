import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import { SettingsContext } from '../Context/Settings';

describe('App', () => {
  test('renders child components with context', () => {
    const { getByTestId } = render(
      <SettingsContext.Provider
        value={{
          displayCount: 3,
          showCompleted: false,
          sortField: 'difficulty',
          setDisplayCount: () => {},
          setShowCompleted: () => {},
          setSortField: () => {},
        }}
      >
        <App />
      </SettingsContext.Provider>
    );

    // Assert that the child components are rendered and accessible
    expect(getByTestId('header')).toBeInTheDocument();
    expect(getByTestId('todo-h1')).toBeInTheDocument();
    expect(getByTestId('footer')).toBeInTheDocument();
  });

  // Add more tests to assert other behavioral functionality as needed
});
