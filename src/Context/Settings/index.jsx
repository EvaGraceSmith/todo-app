import React, { useState, useEffect } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider({ children }) {
  const [displayCount, setDisplayCount] = useState(3);
  const [showCompleted, setShowCompleted] = useState(false);
  const [sortField, setSortField] = useState('difficulty');
  const [itemsToShow, setItemsToShow] = useState(5);

  useEffect(() => {
    const storedSettings = localStorage.getItem('settings');
    if (storedSettings) {
      const { displayCount, showCompleted, sortField, itemsToShow } = JSON.parse(storedSettings);
      setDisplayCount(displayCount);
      setShowCompleted(showCompleted);
      setSortField(sortField);
      setItemsToShow(itemsToShow);
    }
  }, []);

  useEffect(() => {
    const settings = {
      displayCount,
      showCompleted,
      sortField,
      itemsToShow,
    };
    localStorage.setItem('settings', JSON.stringify(settings));
  }, [displayCount, showCompleted, sortField, itemsToShow]);

  const state = {
    displayCount,
    showCompleted,
    sortField,
    itemsToShow,
    setDisplayCount,
    setShowCompleted,
    setSortField,
    setItemsToShow,
  };

  return (
    <SettingsContext.Provider value={state}>
      {children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
