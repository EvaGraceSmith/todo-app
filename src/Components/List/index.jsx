import { useContext, useState } from "react"
import { SettingsContext } from "../../Context/Settings";
import { CloseButton, Container, createStyles, Group, Pagination, Card, Text, Badge, Space, } from '@mantine/core';
import Auth from '../Auth';
import { Else, If, Then } from 'react-if';
import { AuthContext } from '../../Context/Auth';

const useStyles = createStyles((theme) => ({
  badge: {
    cursor: 'pointer',
    marginTop: 5,
    marginLeft: 5,
    marginBottom: 5,
  },
  group: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    withBorder: true,
    shadow: 'lg',
  },
  card: {
    marginTop: 20,
  },
  text: {
    paddingRight: 180,
  },
}));




function List({ list, toggleComplete, deleteItem }) {
  const {
    displayCount,
    showComplete,
    sort,
  } = useContext(SettingsContext);
  const { isLoggedIn, can } = useContext(AuthContext);


  const [activePage, setActivePage] = useState(1);

  const { classes } = useStyles();

  // Sort the list based on the selected sort field
  const sortedList = list.sort((a, b) => {
    if (a[sort] < b[sort]) return -1;
    if (a[sort] > b[sort]) return 1;
    return 0;
  });

  //proof of life

  // Determine the renderable list based on showCompleted setting
  const renderList = showComplete ? sortedList : sortedList.filter(item => !item.complete);

  //TODO: determine how many pages will be in our pagination component
  const pageCount = Math.ceil(renderList.length / displayCount);

  //TODO: determine where to start rendering display data
  const listStart = displayCount * (activePage - 1);

  //TODO where to end rendering display data using slice
  const listEnd = listStart + displayCount;

  //TODO: list that is displayed on the page
  const displayList = renderList.slice(listStart, listEnd);

  return (
    <>
      <Container px="sm" spacing={10}>
        {displayList.map(item => (
          <>
            <Card
              className={classes.card}
              key={item.id}
              padding="lg"
              radius="sm"
              withBorder
              shadow="lg"
            >
              <Card.Section
                withBorder>
                <Group position='apart'>
                  <Group
                    className={classes.group}
                    padding="sm">
                    <If condition={isLoggedIn && can('update')}>
                      <Then>
                        <Badge
                          className={classes.badge}
                          marginLeft="sm"
                          marginTop="sm"
                          color={item.complete ? 'red' : 'green'}
                          variant="filled"
                          onClick={() => toggleComplete(item)}>
                          {item.complete ? 'Complete' : 'Pending'}
                        </Badge>
                      </Then>
                      <Else>
                        <Badge
                          className={classes.badge}
                          marginLeft="sm"
                          marginTop="sm"
                          color={item.complete ? 'red' : 'green'}
                          variant="filled"
                        >
                          {item.complete ? 'Complete' : 'Pending'}
                        </Badge>
                      </Else>
                    </If>

                    <Text
                      className={classes.text}
                      size="lg" fontcolor="black" align="left">
                      {item.assignee}
                    </Text>
                  </Group>
                  <Auth capability="delete">
                    <CloseButton onClick={() => deleteItem(item._id)}
                      title="Delete To Do Item"
                      size="xs" />
                  </Auth>
                </Group>
              </Card.Section>
              <Card.Section
                inheritPadding py="xs">
                <Text size="lg">{item.text}</Text>
                <Text align="right">
                  <small>
                    Difficulty: {item.difficulty}
                  </small>
                </Text>
              </Card.Section>

            </Card>
            <Space h="md" />
          </>
        ))}

        <Pagination value={activePage} onChange={setActivePage} size="md" total={pageCount} radius={0} />
      </Container>

    </>
  )
}

export default List;