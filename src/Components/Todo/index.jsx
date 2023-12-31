import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form';
import { Button, Card, createStyles, Grid, Header, Slider, Text, TextInput } from "@mantine/core";
import List from '../List';
import Auth from '../Auth';
import axios from 'axios';



const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.dark[7],
    width: '70%',
    height: 70,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    margin: 'auto',
    marginTop: 20,
    padding: theme.spacing.lg,
    paddingTop: 30,
    paddingBottom: 30,
    color: theme.colors.gray[0],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
  },


  card: {
    backgroundColor: theme.colors.gray[0],
    marginTop: 20,
    marginBottom: 20,
  },

  card2: {
    backgroundColor: theme.colors.gray[0],
    marginTop: 20,
    marginBottom: 20,
  },

  button: {
    marginTop: 20,
    // marginBottom: 20,
  },

  textinput: {
    marginBottom: 20,
  },

  list: {
    marginTop: 20,
    marginBottom: 20,
  },
}));


const Todo = () => {

  const { classes } = useStyles();

  // Configure marks to match step
  const Marks = [
    { value: 0 },
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

  async function addItem(item) {
    item.complete = false;
    const config = {
      baseURL: 'https://api-js401.herokuapp.com/api/v1/todo',
      method: 'post',
      data: item
    };
    let response = await axios(config);
    console.log('item', response.data);
    setList([...list, item]);
  }

  async function deleteItem(id) {
    await axios.delete(`https://api-js401.herokuapp.com/api/v1/todo/${id}`);
    const items = list.filter(item => item._id !== id);
    setList(items);
  }

  async function toggleComplete(itemToUpdate) {
    itemToUpdate.complete = !itemToUpdate.complete;
    // build a request object with all of the details
    let config = {
      baseURL: `https://api-js401.herokuapp.com/api/v1/todo/${itemToUpdate._id}`,
      method: 'put',
      data: itemToUpdate
    }
    // make the call to update our data
    await axios(config);
    let response = await axios.get('https://api-js401.herokuapp.com/api/v1/todo');
    let items = response.data.results;
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

  useEffect(() => {
    (async () => {
      let response = await axios.get('https://api-js401.herokuapp.com/api/v1/todo');
      setList(response.data.results);
    })();
  }, []);

  return (
    <>
      <Header className={classes.header}>
        <h1 data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
      </Header>

      {/* leave the form code inside of the Todo Component */}
      <Grid className={classes.grid}>
        <Grid.Col span={2}></Grid.Col>
        <Grid.Col span={3}>

          <Auth capability="create">
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
                    size="lg"
                    name="text"
                    type="text"
                    onChange={handleChange} />
                </label>

                <label>
                  <TextInput
                    className={classes.textinput}
                    placeholder="Assignee Name"
                    label="Assigned To"
                    radius="xs"
                    size="lg"
                    name="assignee"
                    type="text"
                    onChange={handleChange} />
                </label>

                <label>
                  <Text size="lg">
                    Difficulty
                  </Text>
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
          </Auth>
        </Grid.Col>
        <Grid.Col span={5}>

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
