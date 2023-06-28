import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    footer: {
        backgroundColor: theme.colors.blue[7],
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing.md,
        color: theme.colors.gray[0],
        fontSize: theme.fontSizes.xl,
    }
}));


function Footer() {
    const { classes } = useStyles();
  return (
    <footer className={classes.footer}>
      <p>© 2023 Eva Grace Smith</p>
    </footer>
  );
}

export default Footer;