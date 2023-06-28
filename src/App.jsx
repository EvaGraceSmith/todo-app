import React from 'react';
import { MantineProvider} from '@mantine/core';
import Todo from './Components/Todo';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Todo />
    </MantineProvider>
  );
}




