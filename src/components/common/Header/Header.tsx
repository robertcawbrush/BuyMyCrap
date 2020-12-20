import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {

	const headerStyles: Object = {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		flexWrap: 'wrap'
	}

	return (
		<div className="flex-container" style={headerStyles}>
			<div className="flex-container" style={{ flex: 8, minHeight: '100px' }}>
				<img alt="buyMyCrap logo" style={{ flex: 3 }} />
				<h1 className="hideOnSmallScreen" style={{ flex: 5 }}>Buy My Crap</h1>
			</div>
			<div style={{ flex: 4 }} >
				<div className="flex-container" style={{ justifyContent: 'flex-end', marginRight: '100px'}}>
					<NavLink to="/" exact className="navlink" activeClassName="navlinkActive">Home</NavLink>
				</div>
				</div>
		</div>
	)
}

export default Header;