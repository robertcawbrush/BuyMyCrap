import dispatcher from '../Dispatcher';
import actionTypes from '../actions/actionTypes';
import * as postsApi from '../api/postsApi';
import IPost from '../interfaces/postInterface'

const url = process.env.REACT_APP_URL;

//get posts from JSON-server
export function loadPosts() {

	let fetchUrl: string = '';

	if (url) {
		fetchUrl = url + '/posts';
	}

	postsApi.getPosts(fetchUrl)
		.then((posts: IPost[]) => {
			dispatcher.dispatch({
				actionType: actionTypes.GET_POSTS,
				posts
			});
		}).catch((err:any) => { // TODO: find out type
				console.log('there was an error fetching posts: \n' +  err)
		});
}

export function loadPost(id: number) {

	let fetchUrl: string = '';

	if (url) {
		fetchUrl = url + '/posts/';
	}

	return postsApi.getPost(fetchUrl, id)
		.then((post: IPost) => {
			dispatcher.dispatch({
				actionType: actionTypes.GET_POST,
				post
			});
		}).catch((err:any) => { // TODO: find out type
				console.log('there was an error fetching post id:' + id + ' \n' +  err)
		});
}