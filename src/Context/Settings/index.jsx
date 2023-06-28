import React, {useState, useEffect} from 'react';


// create a context object.......

export const SettingsContext = React.createContext();

// create a provider component
function SettingsProvider({ children }){
    const [ displayCount, setDisplayCount ] = useState(3);
    const [ showCompleted, setShowCompleted ] = useState(false);
    const [ sortField, setSortField ] = useState('difficulty');

  // Read settings from Local Storage on component mount
  useEffect(() => {
    const storedSettings = localStorage.getItem('settings');
    if (storedSettings) {
      const { displayCount, showCompleted, sortField } = JSON.parse(storedSettings);
      setDisplayCount(displayCount);
      setShowCompleted(showCompleted);
      setSortField(sortField);
    }
  }, []);

    // Update Local Storage when settings change
    useEffect(() => {
        const settings = {
          displayCount,
          showCompleted,
          sortField,
        };
        localStorage.setItem('settings', JSON.stringify(settings));
      }, [displayCount, showCompleted, sortField]);

    // this object contains the state and any functions we need to share
    const state = {
        displayCount,
        showCompleted,
        sortField,
        setDisplayCount,
        setShowCompleted,
        setSortField,
    }
    
    return (
        <SettingsContext.Provider value={state}>
            {children}
        </SettingsContext.Provider>

    )
}

export default SettingsProvider;