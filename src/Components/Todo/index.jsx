import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form';
import { Button, Card, createStyles, Grid, Header, Slider,TextInput } from "@mantine/core";
import { v4 as uuid } from 'uuid';
import List from '../List';

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.dark[7],
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
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

  },
  grid: {
  },

  label:{

  },

  card: {
    backgroundColor: theme.colors.gray[0],
    marginTop: 20,
    marginBottom: 20,
  },

  card2:{
    backgroundColor: theme.colors.gray[0],
    marginTop: 20,
    marginBottom: 20,
  },

  button:{
    marginTop: 20,
    // marginBottom: 20,
  },

  textinput:{
    marginBottom: 20,
  },

  list:{
    marginTop: 20,
    marginBottom: 20,
  },
}));


const Todo = () => {

  const { classes } = useStyles();

  // Configure marks to match step
const Marks = [
  { value: 0},
  { value: 25 },
  { value: 50 },
  { value: 75 },
  { value: 100 },
];

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);

  return (
    <>
      <Header className={classes.header}>
        <h1 data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
      </Header>

      {/* leave the form code inside of the Todo Component */}
      <Grid className={classes.grid}>
        <Grid.Col span={2}></Grid.Col>
        <Grid.Col span={4}>
          <Card className={classes.card}
                      shadow='sm'
                      padding='lg'
                      withBorder
          
          >
            <form onSubmit={handleSubmit}>
              <h2>Add To Do Item</h2>

              <label>
                <TextInput
                className={classes.textinput}
                  placeholder="Item Details"
                  label="To Do Item"
                  radius="xs"
                  size="xs"
                  name ="text"
                  type = "text" 
                  onChange={handleChange} />
              </label>

              <label>
                <TextInput
                className={classes.textinput}
                  placeholder="Assignee Name"
                  label="Assigned To"
                  radius="xs"
                  size="xs"
                  name = "assignee"
                  type = "text"
                  onChange={handleChange} />
              </label>

              <label>
                <span>Difficulty</span>
                <Slider 
                onChange={handleChange} 
                defaultValue={defaultValues.difficulty} 
                marks={Marks}
                type="range" 
                min={1} max={5} 
                name="difficulty" />
              </label>

              <label>
                <Button 
                className={classes.button}
                type="submit">
                  Add Item</Button>
              </label>
            </form>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>

            <List
            className={classes.list} 
            list={list} toggleComplete={toggleComplete} deleteItem={deleteItem} />

        </Grid.Col>
        <Grid.Col span={2}></Grid.Col>
      </Grid>


    </>
  );
};

export default Todo;
