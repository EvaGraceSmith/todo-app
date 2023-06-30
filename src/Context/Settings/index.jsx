import React, { useState, useEffect } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider({ children }) {
  const [displayCount, setDisplayCount] = useState(3);
  const [showComplete, setShowComplete] = useState(false);
  const [sort, setSort] = useState('difficulty');
 const [firstRender, setFirstRender] = useState(true);




  const saveLocally = () => {
    localStorage.setItem(
      'todo', 
      JSON.stringify({displayCount, showComplete, sort})
      );
  }

  useEffect(() => {
    const storedSettings = localStorage.getItem('settings');
    if (storedSettings) {
      const { displayCount, showCompleted, sortField, firstRender } = JSON.parse(storedSettings);
      setDisplayCount(displayCount);
      setShowComplete(showCompleted);
      setSort(sortField);
      setFirstRender(firstRender);

    }
  }, []);

  useEffect(() => {
    const settings = {
      displayCount,
      showComplete,
      sort,
      firstRender,
    };

    if (firstRender) {
      setFirstRender(false);
    } else {
      localStorage.setItem('settings', JSON.stringify(settings));
    }
   
  }, [displayCount, showComplete, sort, firstRender]);

  const state = {
    displayCount,
    showComplete,
    sort,
    setDisplayCount,
    setShowComplete,
    setSort,
    saveLocally,
    firstRender, 
    setFirstRender,
  };



  return (
    <SettingsContext.Provider value={state}>
      {children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
