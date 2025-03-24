// // Save state to LocalStorage
// export const saveState = (state) => {
//     try {
//       const serializedState = JSON.stringify(state);
//       localStorage.setItem('reduxState', serializedState);
//     } catch (err) {
//       console.error('Error saving state:', err);
//     }
//   };
  
//   // Load state from LocalStorage
//   export const loadState = () => {
//     try {
//       const serializedState = localStorage.getItem('reduxState');
//       console.log("loading state..............................")
//       console.log(serializedState)
//       return serializedState ? JSON.parse(serializedState) : undefined;
//     } catch (err) {
//       console.error('Error loading state:', err);
//       return undefined;
//     }
//   };

//   // Remove state from LocalStorage
//   export const removeState = () => {
//     try {
//       const value = localStorage.removeItem('reduxState');
//       console.log("loading state..............................")
//       return value
//     } catch (err) {
//       console.error('Error loading state:', err);
//       return undefined;
//     }
//   };

import { encryptData } from "../utils/encryptData";
import { decryptData } from "../utils/decryptData";

// Save state to LocalStorage
export const saveState = (state) => {
  try {
    const encryptedState = encryptData(state);
    localStorage.setItem('reduxState', encryptedState);
  } catch (err) {
    console.error('Error saving state:', err);
  }
};

// Load state from LocalStorage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    console.log("loading encrypted state..............................")
    console.log(serializedState)
    return serializedState ? decryptData(serializedState) : undefined;
  } catch (err) {
    console.error('Error loading state:', err);
    return undefined;
  }
};



// export {loadState, saveState}
//    // Saving encrypted data
//  const saveData = (key, data) => {
//   const encryptedData = encryptData(data);
//   if (encryptedData) {
//    localStorage.setItem(key, encryptedData);
//   }
//  };
 
//  // Retrieving and decrypting data
//  const getData = (key) => {
//   const encryptedData = localStorage.getItem(key);
//   if (encryptedData) {
//    return decryptData(encryptedData);
//   }
//   return null;
//  };