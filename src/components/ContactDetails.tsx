import React from 'react';


function ContactDetails(props: any) {

	return (
		<div className="row">
			<div>
				<label htmlFor="email">
				Email:
				</label>
				 <a id="email" href={'mailto:'+ props.email}>{props.email}</a>
			</div>
			{props.phone ? (
				<div>
					<label htmlFor="phoneNumber">phone #: </label>
					<a href={'tel:' + props.phone}>{props.phone}</a>
				</div>) : ''
			}
			<div className="row">
				<button className="btn btn-primary" onClick={props.pushContact} style={{ maxWidth: '50px'}}>Close</button>
			</div>
		</div>
	)
}

export default ContactDetails;