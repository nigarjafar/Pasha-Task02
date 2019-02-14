import React from "react";

const PostsTable = props => {
	return (
		<div className="ui segment">
			<h3 className="ui header">Posts</h3>
			<table className="ui celled table">
				<thead>
					<tr>
						<th>Id</th>
						<th>Title</th>
						<th>Body</th>
					</tr>
				</thead>
				<tbody>
					{props.posts.map(post => {
						return (
							<tr key={post.id}>
								<td>{post.id}</td>
								<td>{post.title}</td>
								<td>{post.body}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default PostsTable;
