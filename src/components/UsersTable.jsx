import React from "react";

const UsersTable = props => {
	return (
		<div className="ui segment">
			<h3 className="ui header">Users</h3>
			<table className="ui celled table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Username</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Website</th>
					</tr>
				</thead>
				<tbody>
					{props.users.map(user => {
						return (
							<tr key={user.id}>
								<td>{user.name}</td>
								<td>{user.username}</td>
								<td>{user.email}</td>
								<td>{user.phone}</td>
								<td>{user.website}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default UsersTable;
