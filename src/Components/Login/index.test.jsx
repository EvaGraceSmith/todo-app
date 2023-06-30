import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AuthContext } from '../../Context/Auth';
import Login from '../Login';

describe('Login component', () => {
  test('renders login form when user is not logged in', () => {
    const mockLogin = jest.fn();
    const mockLogout = jest.fn();
    const mockIsLoggedIn = false;

    render(
      <AuthContext.Provider value={{ login: mockLogin, logout: mockLogout, isLoggedIn: mockIsLoggedIn }}>
        <Login />
      </AuthContext.Provider>
    );

    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByText('Log In');

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  test('renders logout button when user is logged in', () => {
    const mockLogin = jest.fn();
    const mockLogout = jest.fn();
    const mockIsLoggedIn = true;

    render(
      <AuthContext.Provider value={{ login: mockLogin, logout: mockLogout, isLoggedIn: mockIsLoggedIn }}>
        <Login />
      </AuthContext.Provider>
    );

    const logoutButton = screen.getByText('Log Out');
    expect(logoutButton).toBeInTheDocument();
  });

  test('calls login function with username and password when "Log In" button is clicked', () => {
    const mockLogin = jest.fn();
    const mockLogout = jest.fn();
    const mockIsLoggedIn = false;
    const mockUsername = 'testuser';
    const mockPassword = 'testpassword';

    render(
      <AuthContext.Provider value={{ login: mockLogin, logout: mockLogout, isLoggedIn: mockIsLoggedIn }}>
        <Login />
      </AuthContext.Provider>
    );

    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByText('Log In');

    fireEvent.change(usernameInput, { target: { value: mockUsername } });
    fireEvent.change(passwordInput, { target: { value: mockPassword } });
    fireEvent.click(loginButton);

    expect(mockLogin).toHaveBeenCalledTimes(1);
    expect(mockLogin).toHaveBeenCalledWith(mockUsername, mockPassword);
  });


});
