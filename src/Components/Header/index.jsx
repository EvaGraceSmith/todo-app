// import { Header } from "@mantine/core";

// function HeaderSimple (){
// return (
// <Header height={60} p="xs">
// This is my Header
// </Header>
// )
// }

// export default HeaderSimple;

import { createStyles, Navbar} from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
    navbar: {
        backgroundColor: theme.colors.blue[7],
        height: 60,
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'center',
        padding: theme.spacing.md,
        color: theme.colors.gray[0],
        fontSize: theme.fontSizes.xl,
        fontWeight: 500,
    },
}));

function Header() {
const {classes} = useStyles();
    return (
        <header data-testid="header">
            <Navbar className= {classes.navbar} >
            <Link className={classes.link} to="/" default >Home</Link>
          <Link className={classes.link} to="/settings">Settings</Link>
            </Navbar>
        </header>
    )

}

export default Header;