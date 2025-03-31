import React from 'react';
import { Link } from 'react-router-dom';

const HeaderBottom = () => {
  return (
	<div className="header-bottom">
			<div className="fixed-header">
			<div className="container">
				<div className="top-menu">
					<span className="menu"><img src="assets/images/nav.png" alt=""/> </span>
                     <ul>
						<nav className="cl-effect-5">
					 <li><Link  to="index.html"><span data-hover="Home">home</span></Link></li>
					 <li><Link className="scroll" to="#service"><span data-hover="service">service</span></Link></li>
					 <li><Link className="scroll" to="#about"><span data-hover="about">about</span></Link></li>
					 <li><Link to="/menu"><span data-hover="menus">menus</span></Link></li>
					 <li><Link  to="event.html"><span data-hover="event">event</span></Link></li>
					 <li><Link className="scroll" to="#tests"><span data-hover="Tests">tests</span></Link></li>
					 <li><Link className="scroll" to="#location"><span data-hover="location">location</span></Link></li>
					 </nav>
				 </ul>
		
			 </div>

				</div>
			</div>
		</div>
  );
}

export default HeaderBottom;
