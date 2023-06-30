import { useContext, useState } from "react"
import { SettingsContext } from "../../Context/Settings";
import { CloseButton, Container, createStyles, Group, Pagination, Card, Text, Badge, Space,  } from '@mantine/core';


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




function List({ list, toggleComplete, deleteItem}){
    const {
        displayCount,
        showCompleted,
        sortField,
        setSortField,
    } = useContext(SettingsContext);

    const [activePage, setActivePage] = useState(1);
    
    const {classes} = useStyles();

  // Sort the list based on the selected sort field
  const sortedList = list.sort((a, b) => {
    if (a[sortField] < b[sortField]) return -1;
    if (a[sortField] > b[sortField]) return 1;
    return 0;
  });

//proof of life

  // Determine the renderable list based on showCompleted setting
  const renderList = showCompleted ? sortedList : sortedList.filter(item => !item.complete);

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
              <Group
               className={classes.group}
              padding="sm">
                <Badge 
                className={classes.badge}
                marginLeft="sm"
                marginTop="sm"
                color= {item.complete ? 'red' : 'green'}
                variant="filled"
                onClick={() => toggleComplete(item.id)}>
                  {item.complete ? 'Complete' : 'Pending'}
                </Badge>
                <Text 
                className={classes.text}
                size="lg" fontcolor="black" align="left">{item.assignee}</Text>
                <CloseButton onClick={() => deleteItem(item.id)} 
                title="Delete To Do Item"
                size="xs"/>
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



          {/* <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div> */}

          </Card>
<Space h="md"/>
</>
      ))}

        <Pagination value={activePage} onChange={setActivePage} size="md" total={pageCount} radius={0} />


        </Container>


      
        </>
    )
}

export default List;