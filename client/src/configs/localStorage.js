// Save state to LocalStorage
export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('reduxState', serializedState);
    } catch (err) {
      console.error('Error saving state:', err);
    }
  };
  
  // Load state from LocalStorage
  export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('reduxState');
      console.log("loading state..............................")
      console.log(serializedState)
      return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (err) {
      console.error('Error loading state:', err);
      return undefined;
    }
  };

  // remove state from LocalStorage
  export const removeState = () => {
    localStorage.removeItem('reduxState');

  };
