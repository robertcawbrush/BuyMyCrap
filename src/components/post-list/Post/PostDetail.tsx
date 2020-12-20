import React, {useState, useEffect} from 'react';
import postStore from '../../../stores/PostStore';
import * as postActions from '../../../actions/postActions';
import IPost from '../../../interfaces/postInterface';
import moment from 'moment';

function PostDetail(props: any) {


	const [post, setPost] = useState<IPost>({
		datePosted: new Date('01-01-1970'),
		description: '',
		id: NaN,
		imageUrl: '',
		title: '',
		user: ''
	});

	let toggleContact = false;

	useEffect(() => {
		const id = props.match.params.id;

		let defer = new Promise((resolve, reject) => {
			resolve(postActions.loadPost(id));
		})
			.then(() => {
				setPost(postStore.getPost())
			})
			.catch(err => {
				console.log('error retriving post: ' + err)
			})

		
		
	}, [props.match.params.id]);

	function openContact() {
		toggleContact = !toggleContact;
	}

	return (
		<div className="flex-container">
			<div className="flex-container">
				<div>
					<div className="btn">
						{toggleContact ? (<div>
							Contact open
							<button onClick={openContact}>Close Contact</button>	
							</div>) : <button onClick={openContact}>Contact</button>}
					</div>
					<img src={post?.imageUrl ? post.imageUrl : ''} alt={post?.title} />
						User: {post.user}
						Date posted: {post.datePosted.toLocaleString()}
					 <p className="flex-container" style={{flex: 12, margin: ' 0 50px'}}> 
					  {post?.description}
					</p>
				</div>
			</div>
		</div>
	)
}

export default PostDetail;