import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  footer: {
    backgroundColor: theme.colors.gray[0],
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'right',
    padding: theme.spacing.md,
    paddingRight: theme.spacing.xl,
    color: theme.colors.dark[7],
    fontSize: theme.fontSizes.xl,
  }
}));


function Footer() {
  const { classes } = useStyles();
  return (
    <footer className={classes.footer} data-testid="footer">
      <p>© 2023 Eva Grace Smith  </p>
    </footer>
  );
}

export default Footer;