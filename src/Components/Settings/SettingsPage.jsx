import React from 'react';
import { Grid, Card} from '@mantine/core';
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
      justifyContent: 'center',
      margin: 'auto',
      marginTop: 20,
      padding: theme.spacing.md,
      color: theme.colors.gray[0],
      fontSize: theme.fontSizes.md,
      fontWeight: 500,
  
    },
  }));

function SettingsPage() {
  const { displayCount, showCompleted, sortField } = React.useContext(SettingsContext);
  const {classes} = useStyles();

  return (
    <>
    <Header className={classes.header} >
    <ActionIcon 
    color= "dark"
    variant="filled"><Settings size="1rem" /></ActionIcon>
        Manage Settings</Header>

        <Grid>
      <Card>
        <h2>Settings</h2>
        <SettingsForm />
      </Card>
      <Card>
        <h2>Current Settings</h2>
        <ul>
          <li>Display Count: {displayCount}</li>
          <li>Show Completed: {showCompleted ? 'Yes' : 'No'}</li>
          <li>Sort Field: {sortField}</li>
        </ul>
      </Card>
    </Grid>
    </>

  );
}

export default SettingsPage;
