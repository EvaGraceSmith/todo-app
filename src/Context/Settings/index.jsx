import React, { useState, useEffect } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider({ children }) {
  const [displayCount, setDisplayCount] = useState(3);
  const [showComplete, setShowComplete] = useState(false);
  const [sort, setSort] = useState('difficulty');
  const [itemsToShow, setItemsToShow] = useState(5);


  const saveLocally = () => {
    localStorage.setItem(
      'todo', 
      JSON.stringify({displayCount, showComplete, sort})
      );
  }

  useEffect(() => {
    const storedSettings = localStorage.getItem('settings');
    if (storedSettings) {
      const { displayCount, showCompleted, sortField, itemsToShow } = JSON.parse(storedSettings);
      setDisplayCount(displayCount);
      setShowComplete(showCompleted);
      setSort(sortField);
      setItemsToShow(itemsToShow);
    }
  }, []);

  useEffect(() => {
    const settings = {
      displayCount,
      showComplete,
      sort,
      itemsToShow,
    };
    localStorage.setItem('settings', JSON.stringify(settings));
  }, [displayCount, showComplete, sort, itemsToShow]);

  const state = {
    displayCount,
    showComplete,
    sort,
    itemsToShow,
    setDisplayCount,
    setShowComplete,
    setSort,
    setItemsToShow,
    saveLocally
  };

  return (
    <SettingsContext.Provider value={state}>
      {children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
