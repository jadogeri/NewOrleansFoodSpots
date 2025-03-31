import React from 'react';
import { w3_open } from '../../utils/html/w3_open';

const AppHeader = () => {
  return (
    <header className="w3-bar w3-top w3-hide-large w3-black w3-xlarge">
    <div className="w3-bar-item w3-padding-24 w3-wide">LOGO</div>
    <button
      className="w3-bar-item w3-button w3-padding-24 w3-right"
      onClick={()=>{w3_open("myOverlay");w3_open("mySidebar");}}
    >
      <i className="fa fa-bars" />
    </button>
  </header>
  );
}

export default AppHeader;


