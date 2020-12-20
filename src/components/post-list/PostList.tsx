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

	const postlistStyle: Object = {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		alignContent: 'center'
	}

	return (<>
		<div className="flex-container" style={postlistStyle}>
			{posts.map((post: IPost) => {
				return (
					<Post style={{flex: 1}} key={post['id']} post={post} goToPostDetail={goToPostDetail}></Post>
				)
			})
			}
		</div>
		</>
	)
}

export default PostList;