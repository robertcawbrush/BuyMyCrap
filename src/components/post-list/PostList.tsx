import React, {useState, useEffect} from 'react';
import Post from './Post/Post';
import IPost from '../../interfaces/postInterface';
import postStore from '../../stores/PostStore';
import * as postActions from '../../actions/postActions';


function PostList(props: any) {
	const [posts, setPosts] = useState(postStore.getPosts());

	//TODO: get posts

	useEffect(() => {
		postStore.addChangeListener(onChange);

		if (posts.length === 0) {
			postActions.loadPosts();
		}

		// cleanup
		return () => {
			postStore.removeChangeListener(onChange);
		}
	}, [posts.length]);

	function onChange() {
		 setPosts(postStore.getPosts())
	}

	function goToPostDetail(id: number) {
		props.history.push('/post/' + id);
	}

	return (<>
		<div className="row" style={{ display: 'flex', justifyContent: "center",alignItems: 'center' } }>
			{posts.map((post: IPost) => {
				return (
					<Post className="col-md-6" key={post['id']} post={post} goToPostDetail={goToPostDetail} />
				)
			})
			}
		</div>
		</>
	)
}

export default PostList;