import "./App.css";
import React, { Component } from "react";
import UsersTable from "./UsersTable";
import PostsTable from "./PostsTable";
import Spinner from "./Spinner";
import axios from "axios";

class App extends Component {
	state = {
		users: [],
		posts: [],
		loaded: false
	};

	async componentDidMount() {
		const users = await axios.get(
			"https://jsonplaceholder.typicode.com/users"
		);

		const posts = await axios.get(
			"https://jsonplaceholder.typicode.com/posts"
		);

		this.setState({
			users: users.data,
			posts: posts.data,
			loaded: true
		});
	}

	render() {
		return this.state.loaded ? (
			<div className="ui container margin-t">
				<UsersTable users={this.state.users} />
				<PostsTable posts={this.state.posts} />
			</div>
		) : (
			<Spinner />
		);
	}
}

export default App;
