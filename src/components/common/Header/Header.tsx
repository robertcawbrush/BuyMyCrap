import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {

	
	return (
	<>
		<div className="row">
				<img alt="buyMyCrap logo" />
				<h1 className="hideOnSmallScreen">Buy My Crap</h1>
		</div>
		<div >
			<div  >
				<NavLink to="/" exact className="navlink" activeClassName="navlinkActive">Home</NavLink>
			</div>
		</div>
	</>)
}

export default Header;