import { EventEmitter } from 'events';
import dispatcher from '../Dispatcher';
import IPost from '../interfaces/postInterface';
import actionType from '../actions/actionTypes'

const CHANGE_EVENT = 'change';

let _posts: IPost[] = [];
let _post: IPost = {
	id: NaN,
	title: '',
	description: '',
	imageUrl: '',
	user: '',
	datePosted: new Date('01/01/1970')
};

class PostStore extends EventEmitter {

	addChangeListener(callback: any) {
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback: any) {
		this.removeListener(CHANGE_EVENT, callback);
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}

	getPosts(): any {
		return _posts;
	}

	getPost(): any {
		return _post;
	}

}

const postStore = new PostStore();

dispatcher.register((action: any) => {
	switch (action.actionType) {
		case actionType.GET_POSTS:
			_posts = action.posts;
			postStore.emitChange();
			break;
		case actionType.GET_POST:
			_post = action.post;
			postStore.emitChange();
			break;
		default:
	}
})

export default postStore;