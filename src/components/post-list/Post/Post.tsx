import React from 'react';
import './post.scss'

function Post(props: any) {

	const processUrl = process.env.REACT_APP_URL + props.post.imageUrl;

 	return (
		  <div className="well" style={{display: 'flex', flexDirection: 'column', alignContent: 'center'} }>
			  <div className="row">
				  <h3 >{props.post?.title} - &nbsp;</h3>
				  <h3 style={{color: 'green'}}>${props.post.price}</h3>
			  </div>
			  <div className="row">
				  <div className="d-flex justify-content-center">
					  <img
						  style={{ width: 500, height: 500 }}
					  src={processUrl}
					  onClick={() => { props.goToPostDetail(props.post.id) }}
					  alt="postImage"
					  />
				</div>
			  </div>
			  <div className="row">
					  <div className="col-sm-6">Date of posting: {props.post?.datePosted}</div>
					  <div className="col-sm-6" >Posted by: {props.post?.user}</div>
			  </div>
		</div>
	)
}

export default Post;