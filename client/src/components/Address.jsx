import React from 'react';

const Address = ({
    address,
    city,
    state,
    zip
}) => {
  return (
 <p className="pt-5 text-sm leading-5 text-gray-500">
        {address} 
        <br/>
        {city}, {state} {zip}
        <br/>
  </p>
  );
}

export default Address;
