import React from 'react';
import { Link } from 'react-router-dom';

function NotFound404() {

	return (
		<div className="row">
			<h1 className="text-center">
				Page not found
			</h1>
			<div className="row" style={{ flex: 12}}>
				<Link to="/">Return to Home</Link>
			</div>
		</div>
	)
}

export default NotFound404;