import React, { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings/index.jsx';
import { Button, NumberInput, Switch, TextInput } from '@mantine/core';
import { When } from 'react-if';



function SettingsForm() {
  const { 
    displayCount, 
    showCompleted, 
    sort, 
    setDisplayCount, 
    setShowComplete, 
    setSort,  
    saveLocally, } = useContext(SettingsContext);
  const [show, setShow] = useState(false)
  


  const handleSubmit = (e) => {
    e.preventDefault();
    saveLocally();
    setShow(true);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>

      <label>
        <Switch 
        checked={showCompleted} label="Show Completed ToDos" 
        onChange={(e) => setShowComplete(e.currentTarget.checked)}/>
      </label>
      
      <label>
        <NumberInput
          defaultValue={3}
          placeholder="Items per Page"
          label="Items per Page"
          size="xs"
          // type="number"
          name="displayCount"
          value={displayCount}
          onChange={setDisplayCount}
          
        />
      </label>

      <label>
        {/* Sort Field: */}
        <TextInput 
              placeholder="difficulty"
              label="Sort Keyword"
              size="xs"
              name="sortField" 
              value={sort} 
              // onChange={handleChange}
              //this is what they did in class:
              onChange={(e) => setSort(e.currentTarget.value)}
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
