import React from 'react';
import { Grid, Card} from '@mantine/core';
import SettingsForm from './SettingsForm';
import { SettingsContext } from './Context/Settings';

function SettingsPage() {
  const { displayCount, showCompleted, sortField } = React.useContext(SettingsContext);

  return (
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
  );
}

export default SettingsPage;
