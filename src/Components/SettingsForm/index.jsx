import React, { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings/index.jsx';
import { Button, NumberInput, Switch, TextInput } from '@mantine/core';
import { When } from 'react-if';



function SettingsForm() {
  const { displayCount, showCompleted, sortField, setDisplayCount, setShowCompleted, setSortField } = useContext(
    SettingsContext
  );

  const [formValues, setFormValues] = useState({
    displayCount,
    showCompleted,
    sortField,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayCount(formValues.displayCount);
    setShowCompleted(formValues.showCompleted);
    setSortField(formValues.sortField);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <Switch checked={formValues.showCompleted} label="Show Completed ToDos" onChange={(e)=> {setShowCompleted(e.target.checked)
        formValues.showCompleted= e.target.checked} }/>
      </label>
      <label>
        <NumberInput
          defaultValue={3}
          placeholder="Items per Page"
          label="Items per Page"
          size="xs"
          // type="number"
          name="displayCount"
          value={formValues.displayCount}
          onChange={event => setDisplayCount(event.target.value)}
        />
      </label>

      <label>
        {/* Sort Field: */}
        <TextInput 
              placeholder="difficulty"
              label="Sort Keyword"
              size="xs"
              name="sortField" 
              value={formValues.sortField} 
              // onChange={handleChange}
              //this is what they did in class:
              onChange={(e)=> {setSortField(e.target.value)}}
          // <option value="difficulty">Difficulty</option>
          // <option value="assignee">Assignee</option>
          // <option value="text">Text</option> 
        />
      </label>
      <Button 
      size="xs"
      type="submit">Show New Settings</Button>
    </form>
  );
}

export default SettingsForm;
