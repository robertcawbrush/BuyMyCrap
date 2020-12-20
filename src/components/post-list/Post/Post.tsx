import React from 'react';
import './post.css'

function Post(props: any) {

	const postStyle: Object = {
		flexDirection: 'column',
		justifyContent: 'center'
	}

	const processUrl = process.env.REACT_APP_URL + props.post.imageUrl;

 	return (
		  <div className="flex-container well" style={postStyle}>
			  <div className="flex-container" style={{flexDirection: 'row', justifyContent: 'center'}}>
				  <h3 >{props.post?.title} - &nbsp;</h3>
				  <h3 style={{color: 'green'}}>${props.post.price}</h3>
			  </div>
			  <div className="flex-container" style={{justifyContent: 'center'}}>
				  <img src={processUrl} onClick={() => { props.goToPostDetail(props.post.id) }} style={{ cursor: 'pointer' }} alt="postImage" />
			  </div>
			  <div className="flex-container" style={{flexDirection: 'column'}}>
				  <div className="flex-container postTags" style={{ flexDirection: 'row', alignItems: 'center' }}>
					  <div style={{flex: 4}}>Date of posting: {props.post?.datePosted}</div>
					  <div style={{flex: 4}} >Posted by: {props.post?.user}</div>
				  </div>
			  </div>
		</div>
	)
}

export default Post;