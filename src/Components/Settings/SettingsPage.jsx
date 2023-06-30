import React from 'react';
import { Grid, Card } from '@mantine/core';
import SettingsForm from '../SettingsForm';
import { SettingsContext } from '../../Context/Settings/index.jsx';
import { ActionIcon, createStyles, Header } from "@mantine/core";
import { Settings } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.dark[6],
    width: '70%',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    margin: 'auto',
    marginTop: 20,
    padding: theme.spacing.md,
    color: theme.colors.gray[0],
    fontSize: theme.fontSizes.md,
    fontWeight: 500,
  },
  grid: {
    width: '70%',
    display: 'flex',
    flexDirection: 'row',
    margin: 'auto',
  },
  card: {
    backgroundColor: theme.colors.gray[0],
    width: '35%',
    height: '25%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'left',
    margin: 'auto',
    marginTop: 20,
    padding: theme.spacing.md,
    color: theme.colors.dark[6],
    fontSize: theme.fontSizes.md,
    fontWeight: 500,
  },
  card2: {

    backgroundColor: theme.colors.gray[0],
    width: '35%',
    height: '20%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    // justifyContent: 'center',
    margin: 'auto',
    marginTop: 20,
    marginBottom: 20,
    padding: theme.spacing.sm,
    color: theme.colors.dark[6],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
  },

}));

function SettingsPage() {
  const { displayCount, showComplete, sort } = React.useContext(SettingsContext);
  const { classes } = useStyles();

  return (
    <>
      <Header className={classes.header} >
        <ActionIcon
          color="dark"
          variant="filled"><Settings size="1rem" /></ActionIcon>
        Manage Settings</Header>

      <Grid className={classes.grid}>
        <Card className={classes.card}
          shadow='sm'
          padding='lg'
          withBorder
        >
          <h2>Update Settings</h2>
          <SettingsForm />
        </Card>
        <Card className={classes.card2}
          shadow='sm'
          padding='lg'
          withBorder
          justifyContent='left'
        >
          <h2>Updated Settings</h2>
          <p>{showComplete ? 'Show' : 'Hide'} Completed ToDos </p>
          <p>Items Per page: {displayCount}</p>
          <p>Sort Keyword: {sort}</p>

        </Card>
      </Grid>
    </>

  );
}

export default SettingsPage;
