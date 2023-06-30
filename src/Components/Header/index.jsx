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
import Login from '../Login';


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
    
    const { classes } = useStyles();
    return (
        <header data-testid="header">
            <Navbar className={classes.navbar} >
                <Link className={classes.link} to="/" default >Home</Link>
                <Link className={classes.link} to="/settings">Settings</Link>
                <Login />
            </Navbar>
          
        </header>
    )

}

export default Header;