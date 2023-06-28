import React from 'react';

import { useState } from 'react';
// create a context object.......

export const SettingsContext = React.createContext();

// create a provider component
function SettingsProvider({ children }){
    const [ displayCount, setDisplayCount ] = useState(3);
    const [ showCompleted, setShowCompleted ] = useState(false);
    const [ sortField, setSortField ] = useState('difficulty');


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