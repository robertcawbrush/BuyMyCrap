import React from 'react';
import { Link } from 'react-router-dom';

function NotFound404() {

	const fourOhFourStyles: Object = {
		flexDirection: 'column',
		justifyContent: 'center'
	}

	return (
		<div className="flex-container" style={fourOhFourStyles}>
			<h1 style={{flex: 12, textAlign: 'center'}}>
				Page not found
			</h1>
			<div className="flex-container" style={{ flex: 12}}>
				<Link className="flex-value" to="/">Return to Home</Link>
			</div>
		</div>
	)
}

export default NotFound404;