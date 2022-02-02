import React from 'react';
import { Person } from '../components/person';

export default function UserTable({ users, showModal, setID, navigate }) {
	return (
		<>
			<table className="table table-hover align-middle">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Username</th>
						<th>E-Mail</th>
						<th>City</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, index) => (
						<Person
							person={user}
							key={index}
							showModal={showModal}
							setID={setID}
							navigate={navigate}
						/>
					))}
				</tbody>
			</table>
		</>
	);
}
