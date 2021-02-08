import React, {useState, useEffect} from 'react';
import postStore from '../../../stores/PostStore';
import * as postActions from '../../../actions/postActions';
import IPost from '../../../interfaces/postInterface';
import ContactDetails from '../../ContactDetails';

function PostDetail(props: any) {


	const [post, setPost] = useState<IPost>({
		datePosted: new Date('01-01-1970'),
		description: '',
		id: NaN,
		imageUrl: '',
		title: '',
		user: '',
		email: ''
	});
	const [toggleContact, setToggleContact] = useState(false);

	useEffect(() => {
		const id = props.match.params.id;


		new Promise((resolve, reject) => {
			resolve(postActions.loadPost(id));
		})
			.then(() => {
				setPost(postStore.getPost())
			});
		
	}, [props.match.params.id, toggleContact]);

	function pushContact() {
		setToggleContact(!toggleContact) ;
	}

	return (
		<div className="row" >
			<div  >
				<div  >
					<img src={post.imageUrl} alt={post.title} />
					<div  >
						<div className="row">
							<label htmlFor="username">User:</label>
							<div id="username">{post.user}</div>
						</div>
						<div className="row">
							<label htmlFor="datePosted">Date posted:</label>
							<div id="datePosted">{post.datePosted.toLocaleString()}</div>
						</div>
						<div className="row">
							<div className="well">
								{toggleContact ? (
									<ContactDetails pushContact={pushContact} email={post.email} phone={post.phone}></ContactDetails>
								) : <button onClick={pushContact}>Contact</button>
								}
							</div>
						</div>
					</div>
				</div>
					<p> 
					  {post?.description}
					</p>	
			</div>
		</div>
	)
}

export default PostDetail;