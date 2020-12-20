import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NotFound404 from './components/NotFound404';
import Header from './components/common/Header/Header';
import PostList from './components/post-list/PostList';
import PostDetail from './components/post-list/Post/PostDetail';

function App() {
  return (
	  <div className="App">
		  <Header></Header>
		  <Switch>
			  <Route path="/" exact component={PostList}></Route>
			  <Route path="/post/:id" exact component={PostDetail}></Route>
			  <Route component={NotFound404}></Route>
		  </Switch>
    </div>
  );
}

export default App;
