export const omit = (obj, keyToOmit) => {
    delete obj[keyToOmit];
    return obj;
  };
  
