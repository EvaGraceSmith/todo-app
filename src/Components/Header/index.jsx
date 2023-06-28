// import { Header } from "@mantine/core";

// function HeaderSimple (){
// return (
// <Header height={60} p="xs">
// This is my Header
// </Header>
// )
// }

// export default HeaderSimple;

import { createStyles, Navbar, Text} from '@mantine/core';

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

            <Text>My To Do List</Text>
            </Navbar>
        </header>
    )

}

export default Header;