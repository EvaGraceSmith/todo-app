// import { Header } from "@mantine/core";

// function HeaderSimple (){
// return (
// <Header height={60} p="xs">
// This is my Header
// </Header>
// )
// }

// export default HeaderSimple;

import { createStyles, Navbar } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { AuthContext } from '../../Context/Auth';

const useStyles = createStyles((theme) => ({
    navbar: {
        backgroundColor: theme.colors.blue[7],
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'left',
        padding: theme.spacing.md,
        color: theme.colors.gray[0],
        fontSize: theme.fontSizes.xl,
        fontWeight: 500,
    },
    link: {
        display: 'block',
        padding: theme.spacing.md,
        textDecoration: 'none',
        color: theme.colors.gray[0],
        fontSize: theme.fontSizes.xl,
        fontWeight: 500,
        lineHeight: 1,
    },
}));

function Header() {
    const { title, email, staff, setEmail, addStaff } = useContext(SettingsContext);
  const { login, logout, isLoggedIn } = useContext(AuthContext)
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  console.log('isLoggedIn', isLoggedIn);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    // addStaff({name, position});
    e.target.reset();
  }
    const { classes } = useStyles();
    return (
        <header data-testid="header">
            <Navbar className={classes.navbar} >
                <Link className={classes.link} to="/" default >Home</Link>
                <Link className={classes.link} to="/settings">Settings</Link>
            </Navbar>
            <form onSubmit={handleSubmit}>
        <label> username:
          <input onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label> password:
          <input onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>

      <button onClick={logout}>Logout</button>
      {/* <label>Change Email
        <input onChange={(e) => setEmail(e.target.value)} />
      </label>

      <form onSubmit={handleSubmit}>
        <label>Name:
          <input onChange={(e) => setName(e.target.value)} />
        </label>
        <label>Position:
          <input onChange={(e) => setPosition(e.target.value)} />
        </label>
        <button type="submit">Add Staff</button>
      </form>

      {
        staff.map((member, idx) => (
          <li key={`header-${idx}`} >{member.name}, {member.position}</li>
        ))
      } */}
        </header>
    )

}

export default Header;