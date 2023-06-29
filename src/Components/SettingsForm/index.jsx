import React, { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings/index.jsx';

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
        Display Count:
        <input
          type="number"
          name="displayCount"
          value={formValues.displayCount}
          onChange={handleChange}
        />
      </label>
      <label>
        Show Completed:
        <input
          type="checkbox"
          name="showCompleted"
          checked={formValues.showCompleted}
          onChange={handleChange}
        />
      </label>
      <label>
        Sort Field:
        <select name="sortField" value={formValues.sortField} onChange={handleChange}>
          <option value="difficulty">Difficulty</option>
          <option value="assignee">Assignee</option>
          <option value="text">Text</option>
        </select>
      </label>
      <button type="submit">Update Settings</button>
    </form>
  );
}

export default SettingsForm;
