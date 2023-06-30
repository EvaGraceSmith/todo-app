import React, { useState, useEffect } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider({ children }) {
  const [displayCount, setDisplayCount] = useState(3);
  const [showComplete, setShowComplete] = useState(false);
  const [sort, setSort] = useState('difficulty');



  const saveLocally = () => {
    localStorage.setItem(
      'todo', 
      JSON.stringify({displayCount, showComplete, sort})
      );
  }

  useEffect(() => {
    const storedSettings = localStorage.getItem('settings');
    if (storedSettings) {
      const { displayCount, showCompleted, sortField } = JSON.parse(storedSettings);
      setDisplayCount(displayCount);
      setShowComplete(showCompleted);
      setSort(sortField);

    }
  }, []);

  useEffect(() => {
    const settings = {
      displayCount,
      showComplete,
      sort
    };
    localStorage.setItem('settings', JSON.stringify(settings));
  }, [displayCount, showComplete, sort]);

  const state = {
    displayCount,
    showComplete,
    sort,
    setDisplayCount,
    setShowComplete,
    setSort,
    saveLocally
  };

  return (
    <SettingsContext.Provider value={state}>
      {children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
