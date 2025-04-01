

// Save state to LocalStorage
 const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(process.env.REACT_APP_REDUX_STATE, serializedState);
    } catch (err) {
      console.error('Error saving state:', err);
    }
  };
  
// Load state from LocalStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem(process.env.REACT_APP_REDUX_STATE);
    console.log("loading state..............................")
    console.log(serializedState)
    
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    console.error('Error loading state:', err);
    return undefined;
  }
};

  // remove state from LocalStorage
  const removeState = () => {
    try {
      localStorage.removeItem(process.env.REACT_APP_REDUX_STATE);

    } catch (err) {
      console.error('Error loading state:', err);
      return undefined;
    }
  };

  export { loadState, saveState, removeState}